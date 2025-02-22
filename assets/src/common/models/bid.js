angular.module('models.bid', ['lodash', 'services', 'sails.io',])

.service('BidModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.create = function(newModel) {
        var url = utils.prepareUrl('bid');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(model) {
        var url = utils.prepareUrl('bid/' + model.id);
        return $sailsSocket.post(url, model).then(success, error);
    };

    this.getByMember = function(model) {
        var url = utils.prepareUrl('bid/member/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getByVideo = function(model) {
        var url = utils.prepareUrl('bid/video/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getMine = function(model) {
        var url = utils.prepareUrl('bid/me/' + model.id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('bid/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        return error;
    };

}]);