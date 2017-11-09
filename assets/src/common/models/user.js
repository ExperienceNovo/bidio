angular.module('models.user', ['lodash', 'services', 'sails.io'])

.service('UserModel', ['$rootScope', '$sailsSocket', 'utils', function($rootScope, $sailsSocket, utils) {

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

    this.getBalance = function(address){
        return $rootScope.cre8web3.eth.getBalance(address.toString(), 'latest');
    };

    this.getBalanceBackend = function(address){
        var url = utils.prepareUrl('wallet/'+address);
        return $sailsSocket.get(url).then(success, error);
    };

    this.getTokenBalance = function(address, identifier){
        var query = {params:{address:address, identifier:identifier}};
        var url = utils.prepareUrl('token');
        console.log(query)
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.getTokenBalanceFrontend = function(address, identifier){
        //TODO: Store All Contracts in RootScope? --> ye
        var viewContract = $rootScope.cre8web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
        var viewContractInstance = viewContract.at('0x6c728ed572633d08cbea0e7ed7aadbf2f044788f');
        var result = viewContractInstance.balanceOf(address.toString(), 'general');
        return result;
        //var result1 = viewContractInstance.balanceOf(address.toString(), 'general', function(error, result){
        //    console.log(error, result)
        //});
    };

    //this.getFilter = function(address, identifier){
    //    var viewContract = $rootScope.cre8web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
    //    var viewContractInstance = viewContract.at('0x6c728ed572633d08cbea0e7ed7aadbf2f044788f');
    //    console.log(viewContractInstance)
        //var viewContractEvent = viewContractInstance.MyEvent([{valueA: 23}], function(error, result){
        //  if (!error)
        //    console.log(result);
        //});
   // };

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

}]);
