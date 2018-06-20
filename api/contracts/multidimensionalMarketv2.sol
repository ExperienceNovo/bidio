pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

contract ERC888{
    function balanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function eskrowBalanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function transfer(address _to, string _id, uint256 _value) public returns (bool success);
    function transferEskrow(address _address, string _id, uint256 _value, string _type) public returns (bool success);
    function transferFromEskrow(string _address, string _id, uint256 _value, string _type) public returns (bool success);
    function transferMulti(address _to, string[] _idSet, uint256[] _valueSet) public returns (bool success);
}

contract multidimensionalMarket {
    struct AssetSet{
        string[] identifierSet;
        uint256[] amountSet;
        uint length;
    }
    struct Order{
        AssetSet assetSet1;
        AssetSet assetSet2;
        address member;
        uint256 index;
    }
    struct OrderMapping{
        string valueSet;
        address member;
    }
    Order[] orders;
    
    //decomposed to a mapping
    //SETS ARE BINARY MARKETS!! --> POWER OF THE STRING
    //[cre8, novo, trev] | [a, b, c]
    //cre8[x], novo[y], trev[z] | a[a], b[b], c[c]
    
    mapping(string => mapping(string => mapping(string => string[]))) orderBook;
    mapping(string => mapping(string => mapping(string => OrderMapping[]))) orderBookMapping;
    
    event CreateOrder(string[] _idSet1, uint256[] _valueSet1, string[] _idSet2, uint256[] _valueSet2, address indexed _member);
    
    //HELPER FXNS
    //STRING LIBRARY..
    function toString(address x) public pure returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }
    function toUint(string s) public pure returns (uint) {
        bytes memory b = bytes(s); uint result = 0;
        for (uint i = 0; i < b.length; i++) {if (b[i] >= 48 && b[i] <= 57) {result = result * 10 + (uint(b[i]) - 48);}}
        return result;
    }
    
    //string[] storage split = str.split(" ");
    function split(string x) public pure returns (string[]) {}
    
    function createOrder(
        address _member,
        string _type, 
        string[] _idSet1, 
        uint256[] _valueSet1, 
        string[] _idSet2, 
        uint256[] _valueSet2
    ) public returns (bool success) {
        ERC888 token = ERC888(0xF0f36c3A545fD00191ED8392028e94eE6d379f17);
        //orderBook['cre8,novo,trev']['a,b,c']['3,4,6']=[ ['1,2,3'],[2,2,3],[2,1,3],[1.5,2.5,2.5] ];
        //orderBook['assetSet1']['assetSet2']['valueSet1']=[ [''] ];
        
        //MORE OBJ ORIENTED
        //OrderDev memory newOrder = OrderDev({valueSet:'1,2,3', member:_member});
        //orderBookDev['_idSet1']['_idSet2']['_valueSet1'].push(newOrder);
        OrderMapping[] storage ordersOnBook = orderBookMapping['_idSet1']['_idSet2']['_valueSet1'];
        
        //CHECK IF ADDRESS HAS TOKENS
        //TODO: EFFICENCY? 
        //TODO SORT SET | BINARY SETS ARE ALPHBETICAL..
        for (uint p = 0; p < _idSet1.length; p++){
            //if (token.balanceOf(_member, _idSet1[p]) < _valueSet1[p] || _valueSet1[p] <= 0 ){return false;}
        }
        
        //find smallest set of orders to fulfil 
        //while !fulfil
        for (uint z = 0; z < ordersOnBook.length; z++){
            string[] memory valueSet = split(ordersOnBook[z].valueSet);
            for (uint u = 0; u < _idSet2.length; u++){
                if (toUint(valueSet[u]) >= toUint(_idSet2[u])){
                    
                    //fulfil..
                    
                    //[idSet1, valueSet1 --> idSet2, valueSet2]
                    
                    //idSet1 eskrow --> _member
                    //token.eskrowBalanceOf(ordersOnBook[z].member, _idSet2[u]);
                    
                    //TODO: DIFF LOOP..
                    //idSet2 _member --> ordersOnBook[z].member
                    //token.balanceOf(_member, _idSet1[u]);
                    
                    //transferFromEskrowToCompleteOrder

                }
                
                //if not.. put on roder.. eskrow
                
                
            }
        }
        
        //TO PROCESS ORDER --> LOOK AT ORDER TYPE 
        //--> LOOK AT LIQUID ON BOOK.. FULFIL IF YOU CAN.. 
        //THEN PLACE REST ON ORDERBOOK.
        
        //FULFIL from eskrow.
        //check order sets below price threshold to match and fuilfil.. 
        //aka transfer from owner eskrow to order maker transfer order maker balance to eskrow holder
        
        //eskrow cash has to be associated with an order... :0
        //problem when multiple orders with same tokens add value to eskrow beyond order amnt. :>)
        
        //think about matching. and granular liquidity. 
        
        //fillOrKill
        //ImmediateOrCancel
        //onBooks

        // PROBABLY HUGE.. CHECK SUM TO LEVEL OF ORDER.
        //string[] storage ordersOnBook = orderBook['_idSet1']['_idSet2']['_valueSet1'];
        //THIS IS NOT CROSS DIMENSIONAL .. 
        for (uint x = 0; x < ordersOnBook.length; x++){
            for (uint y = 0; y < _idSet1.length; x++){
                
                //FUILFIL ORDER
                //member1 ESKROW --> member2 balance
                //token.transferFromEskrow(ordersOnBook[x]/*member*/, _idSet1[y], _valueSet1[y]/*ordersOnBook[x].split value*/, "fuilfil");
    
            }
        }
        
        //PUT TOKENS IN ESKROW.. CANT SPEND WHILE ON ORDER || FILL ORDR FROM ESKROW
        //TODO: 
        for (uint i = 0; i < _idSet1.length; i++){
            //see if there is an amount to fill the order in the ledger
            //orderBook[_idSet1[p]][_valueSet1[p]];
            
            //set 1 for set 2.....
            //if(token.eskrowBalanceOf(0xF0f36c3A545fD00191ED8392028e94eE6d379f17, _idSet1[i]) > 0){}
            //check.. if not in orderBook place (unfilled) in eskrow
            
            //if(token.balanceOf(_member, _idSet1[i]) > _valueSet1[i] && _valueSet1[i] > 0){
            //    token.transferEskrow(_member, _idSet1[i], _valueSet1[i], "deposit");
            //}
        }
        
        //TODO: FUILFIL ORDER..
        //ORDER MATCHING...
        //orders vs completed orders??
        //(what stays on the books vs is fulifilled..)
        
        /*orders.push(
            Order({
                assetSet1: AssetSet({
                    identifierSet:_idSet1,
                    amountSet: _valueSet1,
                    length: _idSet1.length
                }),
                assetSet2: AssetSet({
                    identifierSet:_idSet2,
                    amountSet: _valueSet2,
                    length: _idSet2.length
                }),
                member: _member,
                index: orders.length
            })
        );
        emit CreateOrder(_idSet1, _valueSet1, _idSet2, _valueSet2, _member);*/
        return true;

    }
    
    //TODO: remove from eskrow
    //do we need an id?
    function cancelOrder(address _member) public returns (bool success) {
        
        
    }
    
    //TODO:
    function fulfilOrder(address _member) public returns (bool success) {
        
        
    }

    
}