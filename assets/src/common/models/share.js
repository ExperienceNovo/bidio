angular.module('models.share', ['services', 'sails.io'])

.service('ShareModel', function($q, utils, $sailsSocket) {
    this.shareTwitter = function(composition) {
        var url = utils.prepareUrl('share/twitter/' + composition);
        return $sailsSocket.post(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

});
