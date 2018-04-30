pragma solidity ^0.4.0;
contract ViewToken {
    struct View {
        string video;
        uint watchTime;
    }
    mapping (address => uint) public balances;
    mapping (address => View) public views;
    function ViewToken() {
        //balances[msg.sender] = 1000000;
    }
    function transfer(address _to, uint _amount) {
        if (balances[msg.sender] < _amount) {
            throw;
        }
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
    function createView(address _to, string video, uint watchTime) {
        views[_to].video = video;
        views[_to].watchTime = watchTime;
        balances[_to] += watchTime;
    }
}