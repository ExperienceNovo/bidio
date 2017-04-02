angular.module('models.auth', ['lodash', 'services', 'sails.io',])

.service('AuthModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.login = function(newModel) {
        var url = '/auth/' + newModel.type;
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);
