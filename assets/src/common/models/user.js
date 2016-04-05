angular.module('models.user', ['lodash', 'services', 'sails.io'])

.service('UserModel', function($q, lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url)
        .then(function(response){
            return response.data;
        });
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('user/' + id);
        return $sailsSocket.get(url)
        .then(function(response){
            return response.data;
        });
    };

    this.getByUsername = function(model) {
        var url = utils.prepareUrl('user/username/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('user');
        return $sailsSocket.post(url, newModel)
        .then(function(response){
            return response.data;
        });
    };

	this.update = function(updatedModel){
			
		console.log("end user model in front end");
		var url = utils.prepareUrl('user/' + updatedModel.id);
		return $sailsSocket.post(url, updatedModel)
        .then(function(response){
            return response.data;
        });;
	},

    this.delete = function(id){
        var url = utils.prepareUrl('user/' + id);
        return $sailsSocket.delete(url)
        .then(function(response){
            return response.data;
        });
    }
});