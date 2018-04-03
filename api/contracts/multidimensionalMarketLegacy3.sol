pragma solidity ^0.4.0;
contract multidimensionalMarket {
    
    //this
    //[{
    //identifier:trevor
    //amount:100
    //},
    //{
    //identifier:create
    //amount:10
    //}]
    
    //for that
    //[{
    //identifier:cool
    //amount:100
    //},
    //{
    //identifier:dude
    //amount:10
    //}]

    //{what:amount}, ...., {what:amount} -- {what:amount}, ....., {what:amount}
    //youre close.. 
    
    Ask[] cool;
    
    //figure address.. --> bid & ask are same data structure.. ? 
    struct Asset{
        string identifier;
        uint amount;
    }
    
    struct Order{
        Asset[] array1;
        Asset[] array2;
        string identifier;
    }
   
    mapping(address => Order) orders;

    //committing to sell
    function createOrder() public {
        //can only create ask if you have the token to ask... ex have to have tokens you are asking for 
        //amount chack
    }

    function executeOrder(address buyer, address seller) public {
        //TODO:
        //Market.array1
        //sell amount of token // or cre8coin.. 
        //Ask.Asset[].toSell
        //call multidimensionalToken contract --> transfer fxn
        
    }

}