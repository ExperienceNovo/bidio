angular.module('models.search', ['lodash', 'services', 'sails.io',])

.service('SearchModel', function(lodash, utils, $sailsSocket) {
    this.search = function(model, limit, skip) {
        var url = utils.prepareUrl('search/' + model + '/' + limit + '/' + skip);
        return $sailsSocket.get(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
        return error;
    };
});