angular.module('models.user', ['lodash', 'services', 'sails.io'])

.service('UserModel', function($q, lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url)
        .then(function(response){
            return response.data;
        });;
    };

    this.getSome = function(limiting,skipping) {

        var url = utils.prepareUrl('user/some');

        return $sailsSocket.post(url, {limiting: limiting, skipping: skipping})
        .then(function(response){
            return response.data;
        });
    };

    this.getMe = function(){
        var url = utils.prepareUrl('user/me');
        return $sailsSocket.get(url)
        .then(function(response){
            return response.data;
        });
    }

    this.getOne = function(id) {
        var url = utils.prepareUrl('user/' + id);
        return $sailsSocket.get(url)
        .then(function(response){
            return response.data;
        });
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('user');
        return $sailsSocket.post(url, newModel)
        .then(function(response){
            return response.data;
        });
    };
	this.update = function(updatedModel){
		
		console.log("user model in front end");
		console.log("updatedModel id is: " + updatedModel.id);
		console.log("updatedModel username is: " + updatedModel.username);
		console.log("updatedModel email is: " + updatedModel.email);
		
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