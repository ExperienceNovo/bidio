angular.module('models.search', ['lodash', 'services', 'sails.io',])

.service('SearchModel', function(lodash, utils, $sailsSocket) {
    this.search = function(model) {
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