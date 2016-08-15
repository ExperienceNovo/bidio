angular.module('models.share', ['services', 'sails.io'])

.service('ShareModel', function($q, utils, $sailsSocket) {

    var deferred = $q.defer();

    this.shareTwitter = function(composition) {
        var url = utils.prepareUrl('share/twitter/' + composition);
        return $sailsSocket.post(url).then(success, error);
    };

    var success = function(response) {
        deferred.resolve(response.data)
        return deferred.promise;
    };

    var error = function(error) {
        console.log(error);
    };

});
