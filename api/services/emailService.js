var fs = require("fs");
var Handlebars = require("handlebars");
var mailgun = require('mailgun-js')({
	apiKey: sails.config.secret.MAILGUN.key,
	domain: sails.config.secret.MAILGUN.domain})
	.messages();


module.exports = {

	loadTemplates: function(){
		var that = this;
		var templateFileNames
		return utilsService.promisify(fs.readdir, "./views/email/")
			.then(function(fileNames){
				templateFileNames = fileNames.map(function(fileName){return fileName.split(".").shift()});
				return Promise.all(
					fileNames.map(function(fileName){
						return utilsService.promisify(fs.readFile, "./views/email/" + fileName);
					})
				)
			})
			.then(function(files){
				templateFileNames.forEach(function(name, i){
					that.templates[name] = Handlebars.compile(files[i].toString())
				})
				return true;
			});
	},

	templates: {},

	sendTemplate: function(template, email, subject, data){
		var that = this;
		var sendData = {
			from: "no-reply@" + sails.config.mailgun.domain,
			to: email, 
			subject: subject,
			html: that.templates[template](data)
		};
		return utilsService.promisify(mailgun.send.bind(mailgun), sendData)
	}

}