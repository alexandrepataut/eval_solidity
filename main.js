web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const contract_address = '0xcf59743a134C832556f7B40d14675e3843574B26';
const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "clients",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
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
    "payable": true,
    "stateMutability": "payable",
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
  document.getElementById("deposit").innerHTML = Contract.deposit({from: web3.eth.accounts[0], value: 1*10**18});
}

function withdraw() {
  document.getElementById("withdraw").innerHTML = Contract.withdraw({from: web3.eth.accounts[0], value: 1*10**18});
}

function bankBalance() {
  console.log(Contract.bankBalance());
  document.getElementById("bankBalance").innerHTML = Contract.methods.bankBalance();
}

function balance() {
  for(i =0; i<Contract.clients().length; i++) {
    document.write(Contract.clients({from: web3.eth.accounts[i]})+" "+Contract.balance({from: web3.eth.accounts[i]}));
  }
  //document.getElementById("bankBalance").innerHTML = Contract.bankBalance();
}