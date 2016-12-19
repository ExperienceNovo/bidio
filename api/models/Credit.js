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

    /*beforeCreate: function(model, next){
        //if negative.. etc
        Credit.find({user: model.user})
        .then(function(credits){
            var creditSum = parseFloat(0);
            for (x in credits){
                if (!isNaN(credits[x].value)){
                    creditSum += parseFloat(credits[x].value);
                }
            }
            if (creditSum > 0){
                next(model, null);
            }
            else{return 'NOT ENOUGH CREDIT'}
           
        })
    },*/

    afterCreate: function(model, next){
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
            User.update({id: model.user}, newModel).then(function(user){
                //User.PublishUpdate(user)
            });
            console.log(model)
            //next(model, null);
        })
    },

};

