pragma solidity ^0.4.0;
contract Token {
    uint256 public totalSupply;
    function balanceOf(address _owner) constant returns (uint256 balance);
    function transfer(address _to, uint256 _value) returns (bool success);
    function transferFrom(address _from, address _to, uint256 _value) returns (bool success);
    function approve(address _spender, uint256 _value) returns (bool success);
    function allowance(address _owner, address _spender) constant returns (uint256 remaining);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}

/*  ERC 20 token */
contract StandardToken is Token {
    
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    function transfer(address _to, uint256 _value) returns (bool success) {
        if (balances[msg.sender] >= _value && _value > 0) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            Transfer(msg.sender, _to, _value);
            return true;
        } 
      else {return false;}
    }

    function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
        if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0) {
            balances[_to] += _value;
            balances[_from] -= _value;
            allowed[_from][msg.sender] -= _value;
            Transfer(_from, _to, _value);
        return true;
        } 
        else {return false;}
    }

    function balanceOf(address _owner) constant returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value) returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }
}

contract ViewToken is StandardToken {
    
    string public constant name = "View Token";
    string public constant symbol = "VTKN";
    uint8 public constant decimals = 18;
    
    struct View {
        string content;
        string viewer;
        string creator;
        uint watchTime;
    }
    
    struct Balance{
        string balanceType;
        string balanceAddress;
        uint amount;
    }
    
    //averytime a viewtoken is created -- list 
    
    //mapping (address => Balance) public balances;
    mapping (address => View) public views;
    
    event CreateViewToken(address _from, address _to, string content, uint watchTime);
    
    //function transfer(address _to, uint _value) returns (bool success) {
    //    if ( balances[msg.sender].amount >= _value && _value > 0) {
    //        balances[msg.sender].amount -= _value;
    //        balances[_to].amount += _value;
    //        Transfer(msg.sender, _to, _value);
    //        return true;
    //    } 
    //  else {return false;}
    //}

    function createView(address _to, string content, uint watchTime) {
        
        views[_to].content = content;
        views[_to].watchTime = watchTime;
        
        //balances[_to].balanceType = 'channelViewToken';
        //balances[_to].balanceAddress = content;
        //balances[_to].amount += watchTime;

        CreateViewToken(msg.sender, _to, content, watchTime);
        
    }
    

}






//blanaceContract??

//indiv tokens / contracts --> same thing but store at their address. change the tradable name. 





