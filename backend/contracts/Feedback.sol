//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Feedback{
    // send feedback the contract
    string[] public feedbacks;
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    function sendFeedback(string memory _feedback) public {
        feedbacks.push(_feedback);
    }
    function viewFeedback() public view returns (string[] memory) {
        string[] memory strings = new string[] (feedbacks.length);
        uint256 feedbackLength = feedbacks.length;

        for (uint256 i = 0; i < feedbackLength; ++i) {
        strings[i] = feedbacks[i];
        }

        return strings;
    }
    
}