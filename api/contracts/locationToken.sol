pragma solidity ^0.4.0;
contract Token {
    struct Location {
        uint256 lat;
        uint256 lng;
    }
    mapping (address => uint) public balances;
    mapping(address => Location) public locations;
    function Token() {
        balances[msg.sender] = 1000000;
    }
    function transfer(address _to, uint _amount) {
        if (balances[msg.sender] < _amount) {
            throw;
        }
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
    function addLocation(address _to, uint256 lat, uint256 lng) {
        locations[_to].lat = lat;
        locations[_to].lng = lng;
        balances[_to]++;
    }
    function getLocation(address _to) returns (uint256) {
        var lat = locations[_to].lat;
        var lng = locations[_to].lng;
        return lat;
    }
    function getBalance(address _to) returns (uint balance) {
        return balances[_to];
    }
}