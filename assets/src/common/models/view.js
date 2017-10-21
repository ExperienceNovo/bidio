angular.module('models.view', ['lodash', 'services', 'sails.io',])

.service('ViewModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.create = function(newModel) {
        var url = utils.prepareUrl('view/');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.getByVideo = function(model) {
        var url = utils.prepareUrl('view/video/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.pendingTransactions = function(model) {
        var url = utils.prepareUrl('pendingTransactions');
        return $sailsSocket.get(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);