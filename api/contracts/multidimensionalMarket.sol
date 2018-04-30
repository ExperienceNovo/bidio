pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;
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
    }
    Order[] orders;
    
    event CreateOrder(string[] _idSet1, uint256[] _valueSet1, string[] _idSet2, uint256[] _valueSet2, address indexed _member);

    //TODO: IMPORT BALANCES
    //ViewToken token = ViewToken('1');
    
    mapping (address => mapping (string => mapping (uint256 => uint256))) eskrow;

    function createOrder(address _member, string[] _idSet1, uint256[] _valueSet1, string[] _idSet2, uint256[] _valueSet2) public {
       
        //look at eskrow / orderbook
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
                member:_member
            })
        );
        
        //PUT TOKENS IN ESKROW.. CANT SPEND WHILE ON ORDER
        ////-->put tokens onBook
        for (uint p = 0; p < _idSet1.length; p++){
            //check.. if balances are in eskrow.. can fill the order...--> fillOrKill
            //if(eskrow[_member][_idSet[p]] > 0){//
                //balances[_member][_idSet[p]] += eskrow[_member][_idSet[p]];
            //}
            //check.. if not in eskrow place (unfilled) in eskrow
            //if(balances[_member][_idSet[p]] > 0){//}

            //balances[_member][_idSet[p]] -= amountSet[p];
            //eskrow[_member][_idSet[p]] += amountSet[p];
            
            //eskrow[_member][_idSet1[p]][_valueSet1[p]] += _valueSet1[p];
            
            //if set length is 1, the market is binanry:::: 
            

        }
        
        emit CreateOrder(_idSet1, _valueSet1, _idSet2, _valueSet2, _member);

    }
    
    
}