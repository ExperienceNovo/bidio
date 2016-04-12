angular.module('models.campaign', ['lodash', 'services', 'sails.io',])

.service('CampaignModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('campaign');
        return $sailsSocket.get(url).then(success, error);
    };

	this.getByUrl = function(model) {
        var url = utils.prepareUrl('campaign/url/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.check = function(model){
        var url = utils.prepareUrl('campaign/check');

        return $sailsSocket.post(url, model).then(success,error);
    }

    this.getMine = function(){
        var url = utils.prepareUrl('campaign/me');
        return $sailsSocket.get(url).then(success,error);
    };

    this.getByMember = function(model) {
        var url = utils.prepareUrl('campaign/member/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

	this.getOne = function(model) {
        var url = utils.prepareUrl('campaign/' + model);

        return $sailsSocket.get(url).then(success, error);
    };

    this.getSubmittedVideos = function(model) {
        var url = utils.prepareUrl('campaign/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('campaign');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

	this.update = function(model) {
        var url = utils.prepareUrl('campaign/' + model.id);
        return $sailsSocket.post(url, model).then(success, error);
    };

    this.delete = function(model) {
        var url = utils.prepareUrl('campaign/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };


});
