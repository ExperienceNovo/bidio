angular.module('models.order', ['lodash', 'services', 'sails.io',])

.service('OrderModel', ['$rootScope', '$sailsSocket', 'utils', function($rootScope, $sailsSocket, utils) {

    this.create = function(member, orderExchangeAmount, orderExchangeIdentifier, orderExchangeAmount1, orderExchangeIdentifier1) {
        //TODO: SECURITY - DECENTRALIZATION ~ master acct gas.
        var query = {params:{member:member, orderExchangeAmount:orderExchangeAmount, orderExchangeIdentifier:orderExchangeIdentifier, orderExchangeAmount1: orderExchangeAmount1, orderExchangeIdentifier1:orderExchangeIdentifier1}};
        var url = utils.prepareUrl('order');
        return $sailsSocket.post(url, query).then(success, error);
    };

    this.getAll = function() {
       //TODO: Store All Contracts in RootScope
        //return $rootScope.viewContractInstance.balanceOf(address.toString(), identifier);
    };

    this.getByMarket = function() {
      
    };
    
    this.delete = function(model) {
        
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        return error;
    };

}]);