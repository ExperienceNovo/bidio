angular.module('models.share', ['services', 'sails.io'])

.service('ShareModel', function($q, utils, $sailsSocket) {

    this.shareTwitter = function(composition, shareUrl) {
        console.log(shareUrl)
        var url = utils.prepareUrl('share/twitter/' + composition + '/' + shareUrl);
        return $sailsSocket.post(url).then(success, error);
    };

    var success = function(response) {
        console.log('shareModel: ', response)
        return response.data;
    };

    var error = function(error) {
        console.log('shareModel', error);
        return error;
    };

});
