angular.module('models.profile', ['lodash', 'services', 'sails.io',])

.service('ProfileModel', function(lodash, utils, $sailsSocket) {
    this.update = function(model) {
        var url = utils.prepareUrl('profile/' + model.id);
        return $sailsSocket.post(url,model).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
        return error;
    };
});