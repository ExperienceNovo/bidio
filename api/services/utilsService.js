var fs = require("fs");

module.exports = {
	/*convert function w/ function(err,result) style callback to promise*/
	promisify: function(){
		var args = Array.prototype.slice.call(arguments);
		var prePromise = args.shift();

		var that = this;

		return new Promise(function(resolve,reject){
			prePromise.apply(that, args.concat(function(err,result){
				if (err) reject(err);
				else resolve(result);
			}));
		});
	},

	randomVid: function(){
		var that = this;

		return that.promisify(fs.readdir, "./seedvids")
			.then(function(fileNames){

				var fileName = fileNames[Math.floor(Math.random() * fileNames.length)];

				return that.promisify(fs.readFile, "./seedvids/" + fileName);
			})
	}
}