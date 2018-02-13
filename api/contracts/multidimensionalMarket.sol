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
    event CreateOrder(address indexed _member, int[] _orderExchangeAmount, address[] indexed _orderExchangeIdentifier, int[] _orderExchangeAmount1, address[] _orderExchangeIdentifier1);
    mapping(address => Order[]) orders;
    function createOrder(address _member, int[] _orderExchangeAmount, address[] _orderExchangeIdentifier, int[] _orderExchangeAmount1, address[] _orderExchangeIdentifier1) public {
        CreateOrder(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1);
    }
}