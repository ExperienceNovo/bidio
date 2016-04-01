angular.module('models.user', ['lodash', 'services', 'sails.io',])

.service('UserModel', function($q, lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var deferred = $q.defer();
        var url = utils.prepareUrl('user');

        $sailsSocket.get(url, function(models) {
            return deferred.resolve(models);
        });

        return deferred.promise;
    };

    this.getOne = function(id) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('user/' + id);

        $sailsSocket.get(url, function(model) {
            return deferred.resolve(model);
        });

        return deferred.promise;
    };

    this.create = function(newModel) {
        var deferred = $q.defer();
        var url = utils.prepareUrl('user');

        $sailsSocket.post(url, newModel, function(model) {
            return deferred.resolve(model);
        });

        return deferred.promise;
    };
	this.update = function(updatedModel){
		var deferred = $q.defer();
		
		console.log("user model in front end");
		console.log("updatedModel id is: " + updatedModel.id);
		console.log("updatedModel username is: " + updatedModel.username);
		console.log("updatedModel email is: " + updatedModel.email);
		
		console.log("end user model in front end");
		var url = utils.prepareUrl('user/' + updatedModel.id);
		//return $sailsSocket.post(url, model).then(success, error);
		
		$sailsSocket.post(url, updatedModel, function(model) {
            return deferred.resolve(model);
        });

        return deferred.promise;
	}
});