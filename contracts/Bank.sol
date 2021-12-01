// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Bank {
    mapping(address => uint256) balances;

    function deposit() public payable {
        balances[msg.sender] = balances[msg.sender] + msg.value;
    }

    function withdraw() public payable {
        require(balances[msg.sender] >= msg.value);
        balances[msg.sender] = balances[msg.sender] - msg.value;
    }

    function bankBalance() public view returns(uint256) {
        return address(this).balance;
    }

    function balance() public view returns(uint256) {
        return balances[msg.sender];
    }
}