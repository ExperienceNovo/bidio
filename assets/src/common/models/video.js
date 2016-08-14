angular.module('models.video', ['lodash', 'services', 'sails.io',])

.service('VideoModel', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('video');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getMine = function(){
        var url = utils.prepareUrl('video/me');
        return $sailsSocket.get(url).then(success,error);
    }

	/*this.getByUrl = function(model) {
        var url = utils.prepareUrl('video/url/' + model);
        return $sailsSocket.get(url).then(success, error);
    };*/

    this.getByMember = function(model) {
        var url = utils.prepareUrl('video/member/' + model);
        console.log(url)
        return $sailsSocket.get(url).then(success, error);
    };

	this.getOne = function(model){
		var url = utils.prepareUrl('video/' + model);
		return $sailsSocket.get(url).then(success, error);
	};

    this.getSome = function(limit, skip){
        var url = utils.prepareUrl('video/' + limit + '/' + skip);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('video');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

	this.update = function(model) {
        var url = utils.prepareUrl('video/' + model.id);
        return $sailsSocket.post(url, model).then(success, error);
    };
	
    this.delete = function(model) {
        console.log(model)
        var url = utils.prepareUrl('video/' + model.id);
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
        throw error;
    };
	
});