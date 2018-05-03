pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

contract ERC888{
    
    function balanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function eskrowBalanceOf(address _owner, string _id) constant public returns (uint256 balance);
    function transfer(address _to, string _id, uint256 _value) public returns (bool success);
    function transferEskrow(address _address, string _id, uint256 _value, string _type) public returns (bool success);
    
}

contract Task {
    
    struct Task{
        string[] onCompleteBountySet;
        uint256[] onCompleteValueSet;
        string[] onTimeBountySet;
        uint256[] onTimeValueSet;
        string[] onValidateBountySet;
        uint256[] onValidateValueSet;
        string[] categorySet; //PARENT(S)
        address taskIdentifer;

    }

    function createTask(){}
    function editTask(){}
    function deleteTask(){}
    
}

contract Work {
    
    struct Work{
        uint256 taskIdentifer;
        uint256 time;
    }
    
    function createWork(){
        //WORK PROTOCOL
        //GET TASK ID TOKENS.. 
        //GET CATEGORY TOKENS..
    }
    function validateWork(address _member){
        //REPUTATION PROTOCOL
        Reputation reputation = Reputation(0xF0f36c3A545fD00191ED8392028e94eE6d379f17);
        uint256 dimensionalReputation = reputation.getReputation(_member, 'general');
        
    }

}

contract Reputation {
    mapping (address => mapping (string => uint)) reputation;
    
    function getReputation(address _owner, string _id) constant returns (uint256 balance) {
         return reputation[_owner][_id];
    }
    
    //ON COMPLETE TASK.. ON VALIDATE WORK..
    //REPUTATION IS TOTAL TOKEN -- NOT TRANSFERRABLE
    function createReputation(address _address, string _identifer){
        reputation[_address][_identifer]++;
    }  
    
}

