/**
* Credit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        value: {
            type: 'float',
        },
        user: {
            model: 'user',
        },
        stripeTransactionId: {
        	type: 'string',
        }
    },

    //beforeCreate...? if negative.. etc
    //recalulate the credit sum with the new model, store for the user,
    //check validates if click events etc. etc.
    afterCreate: function(model,next){
        Credit.find({user: model.user})
        .then(function(credits){
            var creditSum = parseFloat(0);
            for (x in credits){
                if (!isNaN(credits[x].value)){
                    creditSum += parseFloat(credits[x].value);
                }
            }
            var newModel = {
                creditSum: creditSum
            };
            console.log(newModel)
            User.update({id: model.user}, newModel).then(function(user){
                console.log('UPDATED')
                //User.PublishUpdate(user)
            });
        })
    },

};

