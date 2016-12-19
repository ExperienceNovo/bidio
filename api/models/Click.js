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
                var newModel = {
                    user: bid[0].user,
                    value: parseFloat(-1*bid[0].value),
                };

                //Sponsor has enough credit..
                if (creditSum > 0){
                    next();
                    //callback updates needed........--->Credit.js
                    //subtract credit from sponsor
                    /*Credit.create(newModel).then(function(credit){
                        //Credit.PublishUpdate(credit);
                        console.log('credit created, next...')
                        var newModel = {
                            user: model.user,
                            value: bid[0].value,
                        };
                        console.log(newModel);
                        next();

                        //give credit to creator
                        //Credit.create(newModel).then(function(credit){
                            //Credit.PublishUpdate(credit);
                        //});
                    });*/
                }
                else{console.log('NOT ENOUGH CREDIT.... REMOVE THE BID.. this prob coulb be a dif thing..')}
               

            });

        });
        
    },

};

