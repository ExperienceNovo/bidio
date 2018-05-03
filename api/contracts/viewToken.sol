pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;
contract ViewToken {
    
    mapping (address => mapping (string => uint256)) balances;
    mapping (address => mapping (string => uint256)) dailyBalance;
    mapping (address => mapping (string => uint256)) eskrow;
    
    mapping (address => uint256) lastView;
    mapping (address => uint256) lastDate;

    event Transfer(address indexed _from, address indexed _to, string indexed _id, uint256 _value);
    event TransferEskrow(address indexed _address, string indexed _type, string indexed _id, uint256 _value);
    event Create(address indexed _from, address indexed _to, string indexed _id, uint256 _value);

    function balanceOf(address _owner, string _id) public constant returns (uint256 balance) {
        return balances[_owner][_id];
    }

    function eskrowBalanceOf(address _owner, string _id) public constant returns (uint256 balance) {
        return eskrow[_owner][_id];
    }

    function transfer(address _to, string _id, uint256 _value) public returns (bool success){
        if (balances[msg.sender][_id] >= _value && _value > 0) {
            balances[msg.sender][_id] -= _value;
            balances[_to][_id] += _value;
            emit Transfer(msg.sender, _to, _id, _value);
            return true;
        } 
        else { revert; }
    }

    function transferEskrow(address _address, string _id, uint256 _value, string _type) public returns (bool success){
        if (_type == "deposit"){
            if (balances[msg.sender][_id] >= _value && _value > 0) {
                balances[msg.sender][_id] -= _value;
                eskrow[msg.sender][_id] += _value;
                emit TransferEskrow(msg.sender, _type, _id, _value);
                return true;
            } 
            else { revert; }
        }
        if (_type == "withdrawl"){
            if (eskrow[msg.sender][_id] >= _value && _value > 0) {
                eskrow[msg.sender][_id] -= _value;
                balances[msg.sender][_id] += _value;
                emit TransferEskrow(msg.sender, _type, _id, _value);
                return true;
            } 
            else { revert; }

        }
    }
    
    function transferMulti(address _to, string[] _idSet, uint256[] _valueSet) public returns (bool success){
        for (uint p = 0; p < _idSet.length; p++) {
            if (balances[msg.sender][_idSet[p]] >= _valueSet[p] && _valueSet[p] > 0) {
                balances[msg.sender][_idSet[p]] -= _valueSet[p];
                balances[_to][_idSet[p]] += _valueSet[p];
                emit Transfer(msg.sender, _to, _idSet[p], _valueSet[p]);
                return true;
            } 
        }
    }
    
    //HELPER FXNS
    function toString(address x) public pure returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }
    
    //PROTOCOL
    function create(address _viewer, address _content, address _creator, uint256 _value) public {
        
        //AUTHENTICATED BY UTILITY SERVICE... MSG.SENDER IS MASTER / BUDGET ACCT
        //REMOVE GAS
        //PROTOCOL
        if (msg.sender == _viewer){ //|| msg.sender == UTIL ADDR ){
        
            //DYNAMICALLY UPDATE VIEW BUDGET
            dailyBalance[_viewer][toString(_viewer)] = dailyBalance[_viewer][toString(_viewer)] - ((now*1 seconds - lastDate[_viewer]*1 seconds) - lastView[_viewer]);
            if (dailyBalance[_viewer][toString(_viewer)]<0){dailyBalance[_viewer][toString(_viewer)] = 0;}
            
            //PERSONAL
            //V->C; ['c']['v']
            //TIME, MAX 86400 / DAY
            //GET CURRENT DAILY TX
            if (dailyBalance[_viewer][toString(_viewer)] + _value < 86400){
                dailyBalance[_viewer][toString(_viewer)] += _value;
            }
            else {
                dailyBalance[_viewer][toString(_viewer)] = 86400;
                _value = 86400 - dailyBalance[_viewer][toString(_viewer)];
            }
            
            lastDate[_viewer] = now;
            lastView[_viewer] = _value;
            balances[_viewer][toString(_viewer)] += _value;
            emit Create(_viewer, _creator, toString(_viewer), _value);

            //CONTEXT
            //C->V; ['v']['c']
            //CHECK IF CREATOR OWNS CONTENT
            //Content[] content = content[_creator];
            //for (uint i = i; i < content.length; i++) {
            //if (content[i].address == _content){
                balances[_creator][toString(_content)] += _value;
                emit Create(_creator, _viewer, toString(_content), _value);
            //}
            //}
        
            //GENERAL
            //C<->V; ['v']['general']; ['c']['general']
            balances[_creator]['general'] += _value;
            balances[_viewer]['general'] += _value;
            emit Create(_creator, _viewer, 'general', _value);
            emit Create(_viewer, _creator, 'general', _value);
    
        }
        
    }
  
}