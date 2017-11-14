module.exports = {
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        videos: {
            collection: 'video',
            via: 'user'
        },
        isAdmin: {
            type: 'boolean',
            defaultsTo: false
        },
        profile: {
            collection: 'Profile',
            via: 'user'
        },
        stripeId: {
            type: 'string'
        },
        creditSum: {
            type: 'float',
            defaultsTo: 0
        },
        passports: {
            collection: 'Passport',
            via: 'user'
        },
        passwordResetToken: {
            type: 'string'
        },
        resetTokenExpiresAfter: {
            type: 'integer'
        },
        walletAddress:{
            type:'string',
        },
        //TODO: store hash -- integrate into passport passport--
        //WARNING: NOT SAFE
        walletPrivateKey:{
            type:'string',
        }
    },

    afterCreate: function(model, next){
        Profile.create({
          user: model.id,
          socialAccounts: model.socialAccounts
        })
        .then(function(profile){
            if (!profile){
                return next(new Error("Error creating user profile"), null);
            }
            console.log(profile);
            model.profile = profile;
            //TODO: 1 UNVALID ATTRIBUTE ERROR -- type email?
            var wallet = blockchainService.createWallet(model);
            model.walletAddress = wallet.address;
            model.walletPrivateKey = wallet.privateKey;
            User.update({id: model.id}, model).then(function(model){
                console.log(model);
                emailService.sendTemplate('welcome', model.email, 'Welcome To Bidio!', {username: model.username});
                return next(null, model);
            });
        })
        .then(function(){
            return next(null, model);
        })
        .catch(function(err){
            return next(err, null);
        });

    },

    getSome: function(limiting, skipping) {
        return User.find()
        .limit(limiting)
        .skip(skipping)
        .then(function (models) {
            return models;
        });
    },

    getAll: function() {
        return User.find()
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return User.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};
