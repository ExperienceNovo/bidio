/**
 * Click.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        video: {
            model: 'video',
            required: true
        },
        user: {
            model: 'user'
        },
        bid: {
        	model: 'bid'
        }
    },

    beforeValidate: function(values, cb) {
        /*if (typeof(values.title) != "undefined"){
            var urlTitle = values.title.replace(/ /g,"-").toLowerCase();
            values.urlTitle = urlTitle
            console.log(values.urlTitle)
            Campaign.findOne({urlTitle: urlTitle}).exec(function (err, record) {
                if (typeof(record) != "undefined"){
                    values.urlTitle = record.urlTitle + '.8';
                    cb();
                }
                else{
                    cb();
                }
            });
        }*/
    },

};

