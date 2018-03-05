pragma solidity ^0.4.0;
contract content {

	struct Content {
		address member;
        string title;
        string description;
        string url;
    }
    mapping (address => Content) public content;
    event CreateContent(address indexed _member, string _title, string _description, string _url);

    function createContent(address _member, string _title, string _description, string _url) {
        CreateContent(_member, _title, _description, _url)
    }

}