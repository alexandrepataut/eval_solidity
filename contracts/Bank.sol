// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Bank {
    mapping(address => uint256) balances;

    function deposit() public payable {
        require(address(this).balance >= msg.value);
        balances[msg.sender] = balances[msg.sender] + msg.value;
    }

    function withdraw() public {
        msg.sender.transfer(1*10**18);
        balances[msg.sender] = balances[msg.sender] - 1*10**18;
    }

    function bankBalance() public view returns(uint256) {
        return address(this).balance;
    }

    function balance() public view returns(uint256) {
        return balances[msg.sender];
    }
}