pragma solidity ^0.4.2;
contract multidimensionalMarket {
    event CreateOrder(address indexed _member, int _orderExchangeAmount, address indexed _orderExchangeIdentifier, int _orderExchangeAmount1, address indexed _orderExchangeIdentifier1);
    function createOrder(address _member, int _orderExchangeAmount, address _orderExchangeIdentifier, int _orderExchangeAmount1, address _orderExchangeIdentifier1) public {
        CreateOrder(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1);
    }
}