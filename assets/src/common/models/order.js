angular.module('models.order', ['lodash', 'services', 'sails.io',])

.service('OrderModel', ['$rootScope', '$sailsSocket', 'utils', function($rootScope, $sailsSocket, utils) {

    this.create = function(newOrder) {
        //TODO: SECURITY - DECENTRALIZATION ~ master acct gas.
        var query = {params:{member:newOrder._member, orderExchangeAmount:newOrder._orderExchangeAmount, orderExchangeIdentifier:newOrder._orderExchangeIdentifier, orderExchangeAmount1: newOrder._orderExchangeAmount1, orderExchangeIdentifier1:newOrder._orderExchangeIdentifier1}};
        console.log(query)
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