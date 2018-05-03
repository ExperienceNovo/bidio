pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

contract ERC888{
    
    function balanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function eskrowBalanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function transfer(address _to, string _id, uint256 _value) public returns (bool success);
    function transferEskrow(address _address, string _id, uint256 _value, string _type) public returns (bool success);
    
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
    
    Order[] orders;
    
    //decomposed to a mapping
    //SETS ARE BINARY MARKETS!! --> POWER OF THE STRING
    //[cre8, novo, trev] | [a, b, c]
    //cre8[x], novo[y], trev[z] | a[a], b[b], c[c]
    mapping(string => mapping(string => mapping(string => string[]))) orderBook;

    event CreateOrder(string[] _idSet1, uint256[] _valueSet1, string[] _idSet2, uint256[] _valueSet2, address indexed _member);
    
    //HELPER FXNS
    //function toString(address x) public pure returns (string) {
    //    bytes memory b = new bytes(20);
    //    for (uint i = 0; i < 20; i++)
    //        b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
    //    return string(b);
    //}
    //function toUint256(string x) public pure returns (uint256) {}
    //function split(string x) public pure returns (string[]) {}
    
    function createOrder(address _member, string[] _idSet1, uint256[] _valueSet1, string[] _idSet2, uint256[] _valueSet2) public returns (bool success) {
        
        ERC888 token = ERC888(0xF0f36c3A545fD00191ED8392028e94eE6d379f17);
        
        //THE 'MARKET' IS THE SET
        //ORDERING IS KEY
        //orderBook['cre8,novo,trev']['a,b,c']['x,y,z']=['1,2,3']
        //orderBook['assetSet1']['assetSet2']['valueSet1']=['valueSet2']
        
        //HMMMMM!!!!
        orderBook['_idSet1']['_idSet2']['_valueSet1'].push('_valueSet2, _address'); //set of strings.
        orderBook['NOVO']['CRE8']['1'].push('2, _address'); // | 1NOVO = 2CRE8.. you can calculate depth.
        
        //TO PROCESS ORDER --> LOOK AT LIQUID ON BOOK.. FULFIL IF YOU CAN.. THEN PLACE REST ON ORDERBOOK.
        //FULFIL from eskrow.
        //check order sets below price threshold to match and fuilfil.. 
        //aka transfer from owner eskrow to order maker transfer order maker balance to eskrow holder
        //NEXT TIME
        
        string[] storage ordersOnBook = orderBook['_idSet1']['_idSet2']['_valueSet1']; // PROBABLY HUGE.. CHECK SUM TO LEVEL OF ORDER.
        //THIS IS NOT CROSS DIMENSIONAL .. 
        for (uint x = 0; x < ordersOnBook.length; x++){
            
            for (uint y = 0; y < _idSet1.length; x++){
                
                //FUILFIL ORDER
                //member1 ESKROW --> member2 balance
                token.transferFromEskrow(ordersOnBook[x]/*member*/, _idSet1[y], _valueSet1[y]/*ordersOnBook[x].split value*/, "fuilfil");
            
            }
            
        }
        
        //CHECK IF ADDRESS HAS TOKENS
        //TODO: EFFICENCY? 
        //TODO SORT SET | BINARY SETS ARE ALPHBETICAL..
        for (uint p = 0; p < _idSet1.length; p++){
            if (token.balanceOf(_member, _idSet1[p]) < _valueSet1[p] || _valueSet1[p] <= 0 ){
                return false;
            }
        }
        //PUT TOKENS IN ESKROW.. CANT SPEND WHILE ON ORDER || FILL ORDR FROM ESKROW
        //TODO: 
        for (uint i = 0; i < _idSet1.length; i++){
            //check.. if balances are in orderbook (multi d).. can fill the order...--> fillOrKill (orderType.. | DEFAULT ALL TO FILL -- residual on book?? | MULTID COMPLEXITY.. MB DO BINARY)
            //this is orderbook
            //see if there is an amount to fill the order in the ledger
            //orderbook // eskrow 
            //orderBook[_idSet1[p]][_valueSet1[p]];
            //set 1 for set 2.....
            if(token.eskrowBalanceOf(0xF0f36c3A545fD00191ED8392028e94eE6d379f17, _idSet1[i]) > 0){}
            //check.. if not in orderBook place (unfilled) in eskrow
            if(token.balanceOf(_member, _idSet1[i]) > _valueSet1[i] && _valueSet1[i] > 0){
                token.transferEskrow(_member, _idSet1[i], _valueSet1[i], "deposit");
            }
            //balances[_member][_idSet[p]] -= amountSet[p];
            //eskrow[_member][_idSet[p]] += amountSet[p];
            //eskrow[_member][_idSet1[p]][_valueSet1[p]] += _valueSet1[p];
            //CREATEMARKETORDER
        }
        
        //TODO: FUILFIL ORDER..
        //ORDER MATCHING...
        //ORDER BOOK SHOULD BE MORE COMPLEX THAN LIST?
        //orders vs completed orders??
        //(what stays on the books vs is fulifilled..)
        
        //ORDERBOOK VS TOTAL ORDERS
        //VS MAPPING VS ESKROW. LOL
        orders.push(
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
        emit CreateOrder(_idSet1, _valueSet1, _idSet2, _valueSet2, _member);
        return true;

    }
    
    //TODO: remove from eskrow
    function cancelOrder() public returns (bool success) {}
    //TODO:
    function fulfilOrder() public returns (bool success) {}

    
}