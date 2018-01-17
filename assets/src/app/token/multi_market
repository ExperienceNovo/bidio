pragma solidity ^0.4.2;
contract multidimensionalMarket {
    address member;
    struct Asset{
        string identifier;
        uint amount;
    }
    struct Order{
        Asset[] array1;
        Asset[] array2;
    }
    event CreateOrder(address indexed _member, int[] _orderExchangeAmount, string[] indexed _orderExchangeIdentifier, int[] _orderExchangeAmount1, string[] _orderExchangeIdentifier1);
    mapping(address => Order[]) orders;
    //mapping(address => string[]) orders;

    function createOrder(address _member, int[] _orderExchangeAmount, string[] _orderExchangeIdentifier, int[] _orderExchangeAmount1, string[] _orderExchangeIdentifier1) public {
       
        CreateOrder(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1);
        
        for (uint p = 0; p < _orderExchangeAmount.length; p++) {
            //SECURITY CHECKS.. ~> TODO
            //orders.push(
            //    Order({
            //        array1: Asset({identifier: 'cool', amount:1}),
            //        array2: Asset({identifier: 'cool', amount:1})
            //    })
            //);
            _orderExchangeAmount[p];
            _orderExchangeIdentifier[p];
            _orderExchangeAmount1[p];
            _orderExchangeIdentifier1[p];
        }
        
            
    }

}