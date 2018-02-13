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
        //string identifier;
    }
   
    //mapping(address => Order) orders;
    mapping(address => address[]) orders;
    //Order[] public orders;


    //committing to sell
    function createOrder(int[] orderExchangeAmount, address[] orderExchangeIdentifier, int[] orderExchangeAmount1, address[] orderExchangeIdentifier1) public {
        //can only create ask if you have the token to ask... ex have to have tokens you are asking for 
        //amount chack
       //-->address is token identifier..
       //int is amount
       
       // orders.push(
       //     Order({
       //         array1: Asset({identifier: 'cool', amount:1}),
       //         array2: Asset({identifier: 'cool', amount:1})
       //     })
       // );
        
        //proposals.push(Proposal({
        //    name: proposalNames[i],
        //    voteCount: 0
        //}));
        //Proposal[] public proposals;


        for (uint p = 0; p < orderExchangeAmount.length; p++) {
            //orderExchangeAmount[p];
            //orderExchangeIdentifier[p];
            //orderExchangeAmount1[p];
            //orderExchangeIdentifier1[p];
           //11`32`  orders[msg.sender] = [orderExchangeIdentifier[p], 'ok'];
        }
            
        //[{
        //identifier:trevor
        //amount:100
        //},
        //{
        //identifier:create
        //amount:10
        //}]
    }
    
    function executeOrder() public {
        //TODO:
        //Market.array1
        //sell amount of token // or cre8coin.. 
        //Ask.Asset[].toSell
        //call multidimensionalToken contract --> transfer fxn
        
    }

}