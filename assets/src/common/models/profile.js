angular.module('models.profile', ['lodash', 'services', 'sails.io',])

.service('ProfileModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.update = function(model) {
        var url = utils.prepareUrl('profile/' + model.id);
        return $sailsSocket.post(url,model).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        return error;
    };

}]);