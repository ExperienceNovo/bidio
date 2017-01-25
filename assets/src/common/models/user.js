angular.module('models.user', ['lodash', 'services', 'sails.io'])

.service('UserModel', function($q, lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('user');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getOne = function(id) {
        var url = utils.prepareUrl('user/' + id);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getMine = function(id) {
        var url = utils.prepareUrl('user/me');
        return $sailsSocket.get(url).then(success, error)
        .catch(function(err){
            console.log(err);
            return err;
        });
    };

    this.getByUsername = function(model) {
        var url = utils.prepareUrl('user/username/' + model);
        return $sailsSocket.get(url).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('user');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

  	this.update = function(updatedModel){
  		var url = utils.prepareUrl('user/' + updatedModel.id);
  		return $sailsSocket.post(url, updatedModel).then(success, error);
  	};

    this.getPassports = function() {
      var url = '/auth/providers/';
      return $sailsSocket.get(url).then(success, error);
    };
    
    this.removePassport = function(model) {
        var url = '/auth/providers/' + model;
        return $sailsSocket.delete(url).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };

});
