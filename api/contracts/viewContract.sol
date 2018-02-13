contract ViewToken {
    mapping (address => mapping (string => uint)) balances;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event CreateViewToken(address indexed _from, address indexed _to, string indexed _id, uint _time);
    function balanceOf(address _owner, string _id) constant returns (uint256 balance) {
        return balances[_owner][_id];
    }
    function transfer(address _to, uint256 _value, string _id) returns (bool success) {
        if (balances[msg.sender][_id] >= _value && _value > 0) {
            balances[msg.sender][_id] -= _value;
            balances[_to][_id] += _value;
            Transfer(msg.sender, _to, _value);
            return true;
        }
        else {return false;}
    }
    function createView(address _to, string _id, uint _time) {
        balances[_to][_id] += _time;
        CreateViewToken(msg.sender, _to, _id, _time);
    }
}