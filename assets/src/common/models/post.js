angular.module('models.post', ['lodash', 'services', 'sails.io',])

.service('PostModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {
    
    this.getAll = function() {
        var url = utils.prepareUrl('post');
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('post');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.getByUrl = function(model) {
        var url = utils.prepareUrl('post/url/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('post/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);