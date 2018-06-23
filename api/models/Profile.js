/**
* Profile.js
*
* @description :: Profile Model.
*
*/

module.exports = {

  attributes: {
  	pictureUrl: {
  		type: "string",
  		defaultsTo: "/images/silhouette_orange.jpg"
  	},
    bannerUrl: {
      type: "string",
      defaultsTo: "/images/banner.jpeg"
    },
    balance: {
      type: "float",
      defaultsTo: 0
    },
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string"
    },
    description: {
      type: "string"
    },
    companyName: {
      type: "string"
    },
    companyUrl: {
      type: "string"
    },
    isSponsor: {
      type: "boolean",
      defaultsTo: false
    },
    isTrusted: {
      type: "boolean",
      deafaultsTo: false
    },
  	user: {
  		model: "user",
  		required: true,
  		unique: true
  	},
    socialAccounts: {
      type: 'json',
      defaultsTo: {}
    }
  },

  afterCreate: function(model, next){
        var bannerUrl = ['images/banner.jpeg', 'images/panel-3bg2.jpg', 'images/panel-4bg.jpg', 'images/panel-1bg.jpg', 'images/creator-hero.png', 'images/sponsor-hero.png', 'images/natural.jpg' ,'images/panel-2bg.jpg', 'images/intro.jpg'];
        var pictureUrl = ['images/silhouette_orange.jpg', 'images/bidio_symbol.png', 'images/bidio_logo.png'];
        var bannerInt = Math.floor(Math.random() * (bannerUrl.length));
        var pictureInt = Math.floor(Math.random() * (pictureUrl.length));
        model.bannerUrl = bannerUrl[bannerInt];
        model.pictureUrl = pictureUrl[pictureInt];
        console.log(model);
        console.log(bannerInt);
        console.log(pictureInt);
        Profile.update({id: model.id}, model)
        .then(function(model){
            return next(null, model);
        }); 
    },
};
