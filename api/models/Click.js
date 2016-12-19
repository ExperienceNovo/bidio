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
        },
        user: {
            model: 'user',
        },
        bid: {
        	model: 'bid',
        }
    },

    beforeCreate: function(model, next) {
        Bid.find({id:model.bid}).then(function(bid){
            Credit.find({user: model.user})
            .then(function(credits){
                var creditSum = parseFloat(0);
                for (x in credits){
                    if (!isNaN(credits[x].value) && credits[x].value!==null){
                        creditSum += parseFloat(credits[x].value);
                    }
                }
                creditSum = creditSum + parseFloat(-1*bid[0].value);
                if (creditSum > 0){
                    next();
                }
                else{
                    //remove bid here
                    console.log('NOT ENOUGH CREDIT...')
                }
            });
        });
    },

    afterCreate: function(model, next) {
        Bid.find({id:model.bid}).then(function(bid){
            var newModel = {
                user: bid[0].user,
                value: parseFloat(-1*bid[0].value),
            };
            console.log(newModel);

            //subtract credit from sponsor
            Credit.create(newModel).then(function(credit){
                //Credit.publishUpdate(credit);
                var newModel = {
                    user: model.user,
                    value: bid[0].value,
                };
                console.log(newModel);
                //give credit to creator
                Credit.create(newModel).then(function(credit){
                    //Credit.publishUpdate(credit);
                    next(null, model);
                });
            });

        });
    }

};

