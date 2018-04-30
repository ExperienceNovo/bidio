contract ViewToken {
    
    mapping (address => mapping (string => uint)) balances;
    mapping (address => mapping (string => uint)) dailyBalance;
    
    mapping (address => uint256) lastViewDate;
    mapping (address => uint256) lastViewTime;

    event Transfer(address indexed _from, address indexed _to, string indexed _id, uint256 _value);
    event Create(address indexed _from, address indexed _to, string indexed _id, uint256 _value);

    function balanceOf(address _owner, string _id) constant returns (uint256 balance) {
        return balances[_owner][_id];
    }

    function transfer(address _to, string _id, uint256 _value) public returns (bool success){
        if (balances[msg.sender][_id] >= _value && _value > 0) {
            balances[msg.sender][_id] -= _value;
            balances[_to][_id] += _value;
            Transfer(msg.sender, _to, _id, _value);
            return true;
        } 
        else {return false;}
    }
    
    //HELPER FXNS
    function toString(address x) returns (string) {
        bytes memory b = new bytes(20);
        for (uint i = 0; i < 20; i++)
            b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
        return string(b);
    }
    
    //GET DAILY TOKEN VALUE
    //function f(uint start, uint daysAfter) public {
    //    if (now >= start + 1 * 1 days) {
    //      DAILY VALUE RESET
    //    }
    //}
    
    //PROTOCOL
    function create(address _viewer, address _content, address _creator, uint256 _value) public {
        
        //AUTHENTICATED BY UTILITY SERVICE... MSG.SENDER IS MASTER / BUDGET ACCT
        //REMOVE GAS
        //PROTOCOL
        if (msg.sender == _viewer){ //|| msg.sender == UTIL ADDR ){
        
            if(lastViewDate[_viewer] == 0){lastViewDate[_viewer] == now*1 seconds;lastViewTime[_viewer] == 0;}
            if(now*1 seconds - lastViewDate[_viewer] > 86400){dailyBalance[_viewer][toString(_viewer)] = 0;lastViewTime[_viewer] == 0;}
            if(now*1 seconds - lastViewDate[_viewer] < 86400){
                dailyBalance[_viewer][toString(_viewer)]
            }
            //PERSONAL
            //V->C; ['c']['v']
            //TIME, MAX 86400 / DAY
            //GET CURRENT DAILY TX
            if (dailyBalance[_viewer][toString(_viewer)] + _value < 86400){
                
                lastViewDate[_viewer] = now*1 seconds;
                lastViewTime[_viewer] == _value;
                
                dailyBalance[_viewer][toString(_viewer)] += _value;
                balances[_viewer][toString(_viewer)] += _value;
                Create(_viewer, _creator, toString(_viewer), _value);
            }
            else {
                dailyBalance[_viewer][toString(_viewer)] = 86400;
                _value = 86400 - dailyBalance[_viewer][toString(_viewer)];
                balances[_viewer][toString(_viewer)] += _value;
                
                lastViewTime[_viewer] = _value;
                lastViewDate[_viewer] = now*1 seconds;

                Create(_viewer, _creator, toString(_viewer), _value);
            }

            //CONTEXT
            //C->V; ['v']['c']
            //TIME, MAX 86400 / DAY
            //CHECK IF CREATOR OWNS CONTENT
            //Content[] content = content[_creator];
            //for (uint i = i; i < content.length; i++) {
            //if (content[i].address == _content){
                balances[_creator][toString(_content)] += _value;
                Create(_creator, _viewer, toString(_content), _value);
            //}
            //}
        
            //GENERAL
            //C<->V; ['v']['general']; ['c']['general']
            balances[_creator]['general'] += _value;
            balances[_viewer]['general'] += _value;
            Create(_creator, _viewer, 'general', _value);
            Create(_viewer, _creator, 'general', _value);
    
        }
        
    }
  
}