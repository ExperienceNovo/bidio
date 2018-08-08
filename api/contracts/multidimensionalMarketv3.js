pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

//IMPORT STRING UTILS
import "github.com/Arachnid/solidity-stringutils/strings.sol";

//ERC888 | MULTIDIMENSIONAL TOKEN
contract ERC888{
    function balanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function eskrowBalanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function transfer(address _to, string _id, uint256 _value) public returns (bool success);
    function transferEskrow(address _address, string _id, uint256 _value, string _type) public returns (bool success);
    function transferFromEskrow(string _address, string _id, uint256 _value, string _type) public returns (bool success);
    function transferMulti(address _to, string[] _idSet, uint256[] _valueSet) public returns (bool success);
}

//MULTIDIMENSIONAL MARKET
contract multidimensionalMarket {

    //MAPPING DATA STRUCTURE
    struct OrderMapping{
        string valueSet;
        address member;
    }

    //STRUCT BOOK
    mapping(string => mapping(string => mapping(string => OrderMapping[]))) orderBook;
    
    event CreateOrder(string _idSet1, string _valueSet1, string _idSet2, string _valueSet2, address indexed _member);

    //\\//\\//\\//\\//\\
    //\\HELPER FXNS//\\
    //\\//\\//\\//\\//\\
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
    function split(string x) public pure returns (string[]) {}
    //\\//\\//\\//\\//\\
    //\\HELPER FXNS//\\
    //\\//\\//\\//\\//\\

    //CREATE ORDER
    function createOrder(
        address _member,
        string _type, 
        string _idSet1, 
        string _valueSet1, 
        string _idSet2, 
        string _valueSet2
    ) public returns (bool success) {

        //TOKEN
        ERC888 token = ERC888(0xF0f36c3A545fD00191ED8392028e94eE6d379f17);
        
        //CHECK IF ADDRESS HAS TOKENS FOR ORDER
        //string[] memory _idSet1 = split(_idSet1);

        // : | 
        var s = _idSet1.toSlice();
        var delim = ",".toSlice();
        var _idSetList = new string[](s.count(delim) + 1);
        for(uint i = 0; i < _idSetList.length; i++) {
            _idSetList[i] = s.split(delim).toString();
        }

        for (uint p = 0; p < _idSetList.length; p++){
            if (token.balanceOf(_member, _idSetList[p]) < _valueSet1[p] || _valueSet1[p] <= 0 ){return false;}
        }

        //GET ORDERS ON BOOK
        //THESE ARE ORDERS AT EXACT VALUE
        //POTIENTALLY CHECK ORDER SETS BELOW PRICE THRESHOLD | MATCHING BUFFER 
        //TODO: FUNCTION --> GET ORDERS.
        OrderMapping[] storage ordersOnBook = orderBook[_idSet1][_idSet2][_valueSet1];
        
        //FULFIL ORDER FROM ORDER ON BOOK
        //TO PROCESS ORDER --> LOOK AT ORDER TYPE -- fillOrKill | ImmediateOrCancel | onBooks
        //THEN PLACE REST ON ORDERBOOK.
        //ORDERCREATOR BALANCE --> USERONBOOK BALANCE | USERONBOOK ESKROW --> TOKEN BALANCE

        //IF NO ORDERS ON BOOK | ESKROW TRANSFER | CREATE ORDER
        if (ordersOnBook.length == 0 && _type != "fillOrKill"){

            //TODO: PACKAGE AS A FXN | fulfilOrder

            //PUT TOKENS IN ESKROW | CANT SPEND WHILE ON ORDER | FILL ORDR FROM ESKROW
            //ORDERCREATOR BALANCE --> ORDERCREATOR ESKROW
            for (uint i = 0; i < _idSet1.length; i++){  

                //CHECK IF ADDRESS HAS TOKENS
                if(token.balanceOf(_member, _idSet1[i]) > _valueSet1[i] && _valueSet1[i] > 0){
                    token.transferEskrow(_member, _idSet1[i], _valueSet1[i], "deposit");
                }

            }

            //ADD ORDER TO ORDER BOOK MAPPING
            OrderMapping memory newOrder = OrderMapping({valueSet:_valueSet2, member:_member});
            orderBook[_idSet1][_idSet2][_valueSet1].push(newOrder);
            
            //EMIT A CREATION EVENT (STORED IN LOGS) | TODO: MEM
            emit CreateOrder(_idSet1, _valueSet1, _idSet2, _valueSet2, _member);

            return true;

        }

        //IF ORDERS ON BOOK
        else if(ordersOnBook.length > 0) {

            //ordersOnBook | [{valueSet:valueSet, member:member},{}]

            //LOOP THRU ORDERBOOK AT PRICE ASKED | THIS IS NOT CROSS DIMENSIONAL | 'MATCHING ENGINE' | TYPE OF ORDER
            //TODO
            for (uint z = 0; z < ordersOnBook.length; z++){

                //string[] memory valueSet = split(ordersOnBook[z].valueSet);

                //LOOP THROUGH SET OF VALUES (DIMENSIONS) IN ORDER
                for (uint u = 0; u < valueSet.length; u++){

                    //IF DIMENSIONAL LIQUIDITY..
                    //TODO: DIFF LOOP..
                    if (toUint(valueSet[u]) >= toUint(_valueSet2[u])){

                        //FULFIL THE ORDER
                        //[idSet1, valueSet1 --> idSet2, valueSet2]
                        //idSet1 eskrow --> _member
                        //token.eskrowBalanceOf(ordersOnBook[z].member, _idSet2[u]);
                        //idSet2 _member --> ordersOnBook[z].member
                        //token.balanceOf(_member, _idSet1[u]);
                        //transferFromEskrowToCompleteOrder

                        //FUILFIL ORDER
                        //member1 ESKROW --> member2 balance
                        //token.transferFromEskrow(ordersOnBook[x]/*member*/, _idSet1[y], _valueSet1[y]/*ordersOnBook[x].split value*/, "fuilfil");
                        //emit CreateOrder(_idSet1, _valueSet1, _idSet2, _valueSet2, _member);

                    }

                    //NO DIMENSIONAL LIQUIDITY.. ALL OR NOTHING CROSS DIMENSIONAL?
                    //TODO:
                    else{

                        //NO DIRECT LIQUIDITY ..... RECUSRSIVE LIQUIDIY | and buffer liquidity ~ +-1 orderbook lookup
                        ///PARTIAL FILL
                        //return false;

                    }

                }

            }
      
        }
 
    }

    //CANCEL ORDER
    function cancelOrder(address _member, uint256 index) public returns (bool success) {
    
    }

    //FULFIL ORDER
    function fulfilOrder(address _member) public returns (bool success) {
        
    }
    
}
