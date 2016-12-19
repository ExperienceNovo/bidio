angular.module('models.credit', ['lodash', 'services', 'sails.io',])

.service('CreditModel', function(lodash, utils, $sailsSocket) {

    this.create = function(newModel) {
        var url = utils.prepareUrl('credit');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.getMine = function(){
        var url = utils.prepareUrl('credit/me');
        return $sailsSocket.get(url).then(success,error);
    }

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

});