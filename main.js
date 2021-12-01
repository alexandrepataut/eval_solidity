web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const contract_address = '0x90b0559d0Db06d5BEF15733D2755FF38AC8371F1';
const abi = [
  {
    "constant": false,
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "bankBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "balance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
var ContractInstance = web3.eth.contract(abi);
var Contract = ContractInstance.at(contract_address);


function deposit() {
  Contract.deposit({from: web3.eth.accounts[0], value: 1*10**18});
}

function withdraw() {
  Contract.withdraw({from: web3.eth.accounts[0]});
}

function bankBalance() {
  console.log(Contract.bankBalance());
  document.getElementById("bankBalance").innerHTML = Contract.bankBalance();
}

function balance() {
  document.getElementById("balance").innerHTML = Contract.balance();
}