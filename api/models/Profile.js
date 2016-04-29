/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	picture: {
  		type: "string",
  		defaultsTo: "/images/silhouette_orange.jpg"
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
  	}
  }
};

