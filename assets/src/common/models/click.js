angular.module('models.click', ['lodash', 'services', 'sails.io',])

.service('ClickModel', ['$sailsSocket', 'utils', function($sailsSocket, utils) {

    this.create = function(newModel) {
        var url = utils.prepareUrl('click');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.getByVideo = function(model) {
        var url = utils.prepareUrl('click/video/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

}]);