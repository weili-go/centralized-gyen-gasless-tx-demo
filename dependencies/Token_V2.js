window.tokenv2 = {
  "contractName": "Token_v2",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldAdmin",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "authorizer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        }
      ],
      "name": "AuthorizationCanceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "authorizer",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        }
      ],
      "name": "AuthorizationUsed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "burnee",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "newCapacity",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Cap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldCapper",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newCapper",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "CapperChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "mintee",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldMinterAdmin",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newMinterAdmin",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "MinterAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldMinter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newMinter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "MinterChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "OwnerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldPauser",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newPauser",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "PauserChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ProhibitedAddressWiped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldProhibiter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newProhibiter",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ProhibiterChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "prohibited",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "Prohibition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldWiper",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newWiper",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "WiperChanged",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "APPROVE_WITH_AUTHORIZATION_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "CANCEL_AUTHORIZATION_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "PERMIT_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validAfter",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validBefore",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "approveWithAuthorization",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "authorizer",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        }
      ],
      "name": "authorizationState",
      "outputs": [
        {
          "internalType": "enum MetaTransactions.AuthorizationState",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "authorizer",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "cancelAuthorization",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "cap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "capacity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "capper",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeCapper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeMinter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeMinterAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changePauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeProhibiter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "changeWiper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "decrement",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validAfter",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validBefore",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "decreaseAllowanceWithAuthorization",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "increment",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validAfter",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validBefore",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "increaseAllowanceWithAuthorization",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_capper",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_prohibiter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_pauser",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_minterAdmin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_minter",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "initializeWiper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "isTrustedForwarder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "minterAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "pauser",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "prohibit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "prohibiteds",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "prohibiter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "testmint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validAfter",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "validBefore",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "nonce",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "transferWithAuthorization",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "unprohibit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "wiper",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_newName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_wiper",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_forwarder",
          "type": "address"
        }
      ],
      "name": "initializeV2",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "wipeProhibitedAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "versionRecipient",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "SetTrustedForwarder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.9+commit.3e3065ac\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldAdmin\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"authorizer\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"}],\"name\":\"AuthorizationCanceled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"authorizer\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"}],\"name\":\"AuthorizationUsed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"burnee\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"Burn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"newCapacity\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"Cap\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldCapper\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newCapper\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"CapperChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"mintee\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"Mint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldMinterAdmin\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newMinterAdmin\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"MinterAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldMinter\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newMinter\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"MinterChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"OwnerChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"Pause\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldPauser\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"PauserChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"ProhibitedAddressWiped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldProhibiter\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newProhibiter\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"ProhibiterChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"prohibited\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"Prohibition\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"oldWiper\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newWiper\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"WiperChanged\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"APPROVE_WITH_AUTHORIZATION_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"CANCEL_AUTHORIZATION_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"forwarder\",\"type\":\"address\"}],\"name\":\"SetTrustedForwarder\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TRANSFER_WITH_AUTHORIZATION_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validAfter\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validBefore\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"approveWithAuthorization\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"authorizer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"}],\"name\":\"authorizationState\",\"outputs\":[{\"internalType\":\"enum MetaTransactions.AuthorizationState\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"authorizer\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"cancelAuthorization\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"cap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"capacity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"capper\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeCapper\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeMinterAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changePauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeProhibiter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"changeWiper\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"decrement\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validAfter\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validBefore\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"decreaseAllowanceWithAuthorization\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"increment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validAfter\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validBefore\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"increaseAllowanceWithAuthorization\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_capper\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_prohibiter\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_pauser\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_minterAdmin\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_minter\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_newName\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"_wiper\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_forwarder\",\"type\":\"address\"}],\"name\":\"initializeV2\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"initializeWiper\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"forwarder\",\"type\":\"address\"}],\"name\":\"isTrustedForwarder\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minter\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minterAdmin\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pauser\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"prohibit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"prohibiteds\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"prohibiter\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"testmint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validAfter\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"validBefore\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"nonce\",\"type\":\"bytes32\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"transferWithAuthorization\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"unprohibit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"versionRecipient\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"wipeProhibitedAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wiper\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See `IERC20.allowance`.\"},\"approve(address,uint256)\":{\"details\":\"See `IERC20.approve`. Requirements: - `spender` cannot be the zero address.\"},\"approveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"params\":{\"nonce\":\"Unique nonce\",\"owner\":\"Token owner's address (Authorizer)\",\"r\":\"r of the signature\",\"s\":\"s of the signature\",\"spender\":\"Spender's address\",\"v\":\"v of the signature\",\"validAfter\":\"The time after which this is valid (unix time)\",\"validBefore\":\"The time before which this is valid (unix time)\",\"value\":\"Amount of allowance\"}},\"authorizationState(address,bytes32)\":{\"params\":{\"authorizer\":\"Authorizer's address\",\"nonce\":\"Nonce of the authorization\"},\"returns\":{\"_0\":\"Authorization state\"}},\"balanceOf(address)\":{\"details\":\"See `IERC20.balanceOf`.\"},\"cancelAuthorization(address,bytes32,uint8,bytes32,bytes32)\":{\"details\":\"Works only if the authorization is not yet used.\",\"params\":{\"authorizer\":\"Authorizer's address\",\"nonce\":\"Nonce of the authorization\",\"r\":\"r of the signature\",\"s\":\"s of the signature\",\"v\":\"v of the signature\"}},\"changeAdmin(address)\":{\"details\":\"\\\"whenNotPaused\\\" modifier should not be used here\"},\"changePauser(address)\":{\"details\":\"\\\"whenNotPaused\\\" modifier should not be used here\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`. Emits an `Approval` event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"decreaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"params\":{\"decrement\":\"Amount of decrease in allowance\",\"nonce\":\"Unique nonce\",\"owner\":\"Token owner's address (Authorizer)\",\"r\":\"r of the signature\",\"s\":\"s of the signature\",\"spender\":\"Spender's address\",\"v\":\"v of the signature\",\"validAfter\":\"The time after which this is valid (unix time)\",\"validBefore\":\"The time before which this is valid (unix time)\"}},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`. Emits an `Approval` event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"increaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"params\":{\"increment\":\"Amount of increase in allowance\",\"nonce\":\"Unique nonce\",\"owner\":\"Token owner's address (Authorizer)\",\"r\":\"r of the signature\",\"s\":\"s of the signature\",\"spender\":\"Spender's address\",\"v\":\"v of the signature\",\"validAfter\":\"The time after which this is valid (unix time)\",\"validBefore\":\"The time before which this is valid (unix time)\"}},\"nonces(address)\":{\"params\":{\"owner\":\"Token owner's address (Authorizer)\"},\"returns\":{\"_0\":\"Next nonce\"}},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"params\":{\"deadline\":\"Expiration time, seconds since the epoch\",\"owner\":\"Token owner's address (Authorizer)\",\"r\":\"r of the signature\",\"s\":\"s of the signature\",\"spender\":\"Spender's address\",\"v\":\"v of the signature\",\"value\":\"Amount of allowance\"}},\"totalSupply()\":{\"details\":\"See `IERC20.totalSupply`.\"},\"transferWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"params\":{\"from\":\"Payer's address (Authorizer)\",\"nonce\":\"Unique nonce\",\"r\":\"r of the signature\",\"s\":\"s of the signature\",\"to\":\"Payee's address\",\"v\":\"v of the signature\",\"validAfter\":\"The time after which this is valid (unix time)\",\"validBefore\":\"The time before which this is valid (unix time)\",\"value\":\"Amount to be transferred\"}}}},\"userdoc\":{\"methods\":{\"approveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"notice\":\"Update allowance with a signed authorization\"},\"authorizationState(address,bytes32)\":{\"notice\":\"Returns the state of an authorization\"},\"cancelAuthorization(address,bytes32,uint8,bytes32,bytes32)\":{\"notice\":\"Attempt to cancel an authorization\"},\"changeAdmin(address)\":{\"notice\":\"Change Admin\"},\"changePauser(address)\":{\"notice\":\"Change Pauser\"},\"decreaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"notice\":\"Decrease allowance with a signed authorization\"},\"increaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"notice\":\"Increase allowance with a signed authorization\"},\"nonces(address)\":{\"notice\":\"Nonces for permit\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"Update allowance with a signed permit\"},\"transferWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)\":{\"notice\":\"Execute a transfer with a signed authorization\"}}}},\"settings\":{\"compilationTarget\":{\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v2.sol\":\"Token_v2\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/EIP712Domain.sol\":{\"keccak256\":\"0x64f24f3e3d3f16be8a7ecc90dd9636133e0031cd976da8ef2639a82f3e375605\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://072ad2a8a67bd5b56a0f87a1067c9da7ee29073fcbe43a18b2f4fcdc9bae259b\",\"dweb:/ipfs/QmRS2nqCLjfBcMTwEBJw7X1y4pMARoyANrCUVNsMeXQfNH\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/ERC20/ERC20.sol\":{\"keccak256\":\"0x195baf72f66736d70a0a2013cf411516643330989beca5a4f99b07c64b89fcfa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://531939ffad8d14d4c324d6d88a561bb9beba88511391a2ca35176e660bc5f1e6\",\"dweb:/ipfs/QmSaH4Q7tXU8cGhT9XrHsv2fcZoUBqPYKifxP4bULbHuVe\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/ERC20/IERC20.sol\":{\"keccak256\":\"0xe0d88190681b0cfae2502c16c27c8762679625936b07304aff4ff1de996db53f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ab4c8a91c67e76736c11fdb421df038bfc46a00db8dd6d5dea8a0ef2b8cc705a\",\"dweb:/ipfs/QmcfqjAX37qQ4ZX8orWHDnMv3JWTDRp22Fvo32qsXPob7B\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Initializable.sol\":{\"keccak256\":\"0x8eee8bd8c216a3e437bf7a4c9844348f47a2d990e5b06cd96d250e33ab04c25a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c6bb2af880b12be26b148ee99ac3a984168e7fc74721bab9cd44598a0669b038\",\"dweb:/ipfs/QmPfFDaXZbThJgaVim7nvxrw1RuD2xKWCG89K6pznmC8pJ\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/MetaTransactions.sol\":{\"keccak256\":\"0x2eaecf7919e051e6d8fd4a774edfd9cbd1fb0b0b56afa3275e45160f545671ee\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c94cbe023c25cab61f5ed02d4efcb022b1c23cbacf5e485221af2fc27ddb6c16\",\"dweb:/ipfs/QmbWCEDHw2RpwXa2LSWcAwmo5z8ZNwPCF1NqSge2YJbqXW\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Permit.sol\":{\"keccak256\":\"0x8a612e0798b851238d74293c1e418cedf8ad17d7301226a24daee50225e6418f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e20e3d72a7d2dd84cbea0a803075146115b1d7d7e0280b70074c3197f50a3abd\",\"dweb:/ipfs/QmUYkbHdg7VEA1kPJtrgMNmFQmyCbAtmdHtg3AxH3DitU9\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Admin.sol\":{\"keccak256\":\"0xc948097d2642ec0afd836a23518f544dfeb6492b6847ac1c64cd1e4101fcdc31\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da6e61b996956cc59b424c284d8b949cef130f5c9063169e7626f947c4b06903\",\"dweb:/ipfs/QmNbNPEVvB1TRhwLJ6sojyNbP7kL59Q3Rzg4xnyfjHKP7b\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Capper.sol\":{\"keccak256\":\"0x8619ca0a1af4eacfdc5b88254fcb10e0966965e6720a8a20c127c086a5a2a677\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e93ff3b8bc161fdd14324c3a5d16ac74ccaeb3ed51d487235c7a589f1254bcfe\",\"dweb:/ipfs/QmPA5Uc4uEnBNjWig5W7Rko3y5TwLZGRkHe9BzzjzfhPSc\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Common.sol\":{\"keccak256\":\"0x9986bc0b79230ae5aa4431b2d2e95191f061b4e60329370852fde580f75e4ec3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3957c376871da2ec85fc9578f75832f090f11342e14129eb68e61cf638917a9e\",\"dweb:/ipfs/QmWDZotpucMtrP6yRuQ2zrq3N7BAYfqcKoUjMmzjtrrsMF\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Minter.sol\":{\"keccak256\":\"0x7879be4a07d4dd250a67c3e65b2f92e3eb1c929169c0490eac4774250ed732c4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://34a84ac013309ddc4a12a1982734897d885bfbfe4bc90689132b747cb74f187f\",\"dweb:/ipfs/QmQMztqSfpgWFqHUwSCbzjokPkjRmsUCJF1xXmHQpGXBuR\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/MinterAdmin.sol\":{\"keccak256\":\"0x69ef0d0520ab12cd35fb5e9570e2445017281e6d782e6ebe1b00e28c2fdea3a4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b1248d7862c8fa1767915927f8fa00bf9e5dda4415431adcbe46f662a82dfa65\",\"dweb:/ipfs/Qmcx15r1x495woFr2p9LQytizfLYzSxnCHPK9rKDRqh3fq\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Owner.sol\":{\"keccak256\":\"0x18b6edb84fd45a3874d9ca4127dfa031816a57c1b2f842225000588443331e9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5cbc7795717d512c2a49c180a40c457754dd8f87fb6ff1737b92eb8a8128f0b\",\"dweb:/ipfs/QmfZPymuMUq47BNmpyxF4cjfEiGJbrk6nwmKTmy1rtJ4Gs\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Pauser.sol\":{\"keccak256\":\"0x3a9728de4b74e1851ba951cac0cf8cc68294c03497fc23f3ef4e22ccab4e0d8a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://dc0a01685af83c9113bd7e0a1e5d112ed49c0a2184c2bbaf0566d416abf04894\",\"dweb:/ipfs/QmbxGULAT5PEqHRt5tiwXnyDcAJfMzcSy8VLVitd4qGxu1\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Prohibiter.sol\":{\"keccak256\":\"0xbffbed299b1962435b87833dbe3f9a9cda791e26dd51d4434b042830d371a730\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b23c22726027b60d1b4cd42cf316f6981dca5b0273fb6d6662de8681fe77dbbc\",\"dweb:/ipfs/Qmcg1Xum2LjHjNLrnTsCM47t7AUfHRWE4jGXUz8nZyERgg\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Wiper.sol\":{\"keccak256\":\"0xc6358351d5bf34beb7541516aa634966e11f2855477c96a8401ee62039d23ba3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://676132651a538f40e9066834fdef02a265eabf12be32dcfff520c22f54e732e8\",\"dweb:/ipfs/QmT1Mwm41P89DQ6ynNx5bkffx6MKL8n2dRKKtUcW2H9E9z\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Testmint.sol\":{\"keccak256\":\"0xacf13e3794dff1e793d6ab9927af8e9f1eb44b017f8bfe778e571930c768f8c3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1431a477ab24aae97a6c9882f95bb7f0717973b8ec02f1b65c51388199481230\",\"dweb:/ipfs/QmUBHSbMhWuZauzDnEc3ZxsJAzKCjRJcXh55AZXiXnJtXb\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v1.sol\":{\"keccak256\":\"0x423f9f450c126f99213e7666bfc3285c46cc060b0d741e0042f7a5c5d1c38858\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9557ae6b979804bf3625a4f764a9e64aa21ff2176bc5959387afaf88bdd596c3\",\"dweb:/ipfs/QmbHeD8Jpv6xzPTgfZ6e4kyNQHb48XiZQ2XRdVA8dV4wb7\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v2.sol\":{\"keccak256\":\"0x6f9d217094e684665e8627d9ec1c90b84bfe2b00ac6c2c4853c139dd04b74e02\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9c703194c148d3bedd946dca51aaf6f49f6adb1627ae455ff979c93af7e4c482\",\"dweb:/ipfs/QmWdFib2369yawNzR7ewQWxR4SVhYEQg4JUxJym41BJNbo\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Util/ECRecover.sol\":{\"keccak256\":\"0xf428ce45c2617e2ba190d1351d96897565516c9709494c1aa7b04f264a64b6c8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b55a482eba71966c26cadbf6bbbf2f2adfedd085cec9a790a4e2051f91b35b09\",\"dweb:/ipfs/QmcbTwJPAzjRhFVWKrD1jmyH1SwR5TVSmn6sRUBH3TKZe5\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Util/EIP712.sol\":{\"keccak256\":\"0x32dc5cb7d5c6aa1695da9e79c35442361ffe423f5bd49316d5bdcfc49b2e4726\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c72d34b7be25a07e73972b44bf22046bf277a462c99ed4a9634ce4c95356401c\",\"dweb:/ipfs/QmZ5c3cD2xGrnCaRRbPLdZesee5UvQc5UYsER5NGVyqTXZ\"]},\"/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Util/MsgSender.sol\":{\"keccak256\":\"0x9db872a48ab46e939fcf8f06818611e9d5f61642560917d5f0de1ee5277b9228\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e73780101bc29602f65cd1c6d4052a97b37b3100f441fdac6d7f28ddec99ce6\",\"dweb:/ipfs/QmR99S3n79hotZ6UGqqHu8yNtwtfRWTR1rcNV7w5KNvQFs\"]},\"@opengsn/gsn/contracts/BaseRelayRecipient.sol\":{\"keccak256\":\"0x2df349f37fc5a2c8dab07ee48256ab76b651b9259064abe7fd2933855c3b53f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://21ba7b065f89a89bf5576365fe3a82a9f2a1a72aa48c46ecb01fd1e7ec4b1e29\",\"dweb:/ipfs/QmQS9NPnUhzBRDVVKv1pjwFzE8RM3Pem1SsR5nt7aeBb3t\"]},\"@opengsn/gsn/contracts/interfaces/IRelayRecipient.sol\":{\"keccak256\":\"0x33c4d090521cf10a993a07f2670ab3ff0652ef070f209e0ffff44858b863c989\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://82a3a3d60b27c67f5d2d4e5d60a6886d2db3486658267cde4079e782c7654876\",\"dweb:/ipfs/QmQnPhQiX7HuJ8ATptBUMta1fCnTjrE9kZ94U7kCRFhuBJ\"]},\"@opengsn/gsn/contracts/utils/MinLibBytes.sol\":{\"keccak256\":\"0x96c2ad0c80e0db9a849d8f8c9ea865dface3b11983435fcfbd02cd05037293f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://643018a775e0d9df91ac9d28c9b5afc586f322eb14cb4cb9bcb0154a9bbf14e6\",\"dweb:/ipfs/QmPTAEP4VminSwttSwhvT2svenkLkjKsRtXiLpLAPc6ajC\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xaa0e11a791bc975d581a4f5b7a8d9c16a880a354c89312318ae072ae3e740409\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://982d8b344f76193834260436d74c81e5a8f9e89106bb4cd72bbaabda4f3f59c2\",\"dweb:/ipfs/QmSrvP5TkQRhKDVCTpsV3uaKLBhkt7PjUY89vdtM9o5ybK\"]}},\"version\":1}",
  "bytecode": "0x60806040526000600455600580546001600160a01b0319908116909155600680546001600160a81b031916905560078054821690556009805482169055600a805482169055600b805482169055600c80549091169055600f8054610100600160a81b031916905534801561007257600080fd5b50614613806100826000396000f3fe608060405234801561001057600080fd5b50600436106103a45760003560e01c80637ecebe00116101e9578063b89da6421161010f578063dcb413c8116100ad578063e3ee160e1161007c578063e3ee160e14610cba578063e94a010214610d19578063f851a44014610d69578063ff2ad8e414610d71576103a4565b8063dcb413c814610c1d578063dd62ed3e14610c25578063dd75049b14610c53578063e1560fd314610c5b576103a4565b8063c7b84f8d116100e9578063c7b84f8d14610b96578063cffdd46c14610b9e578063d505accf14610bc4578063d916948714610c15576103a4565b8063b89da642146109a2578063c237108f14610b11578063c4e1ccf214610b70576103a4565b80639fd0506d11610187578063a754d48f11610156578063a754d48f146108e9578063a9059cbb146108f1578063b00860951461091d578063b0e717661461097c576103a4565b80639fd0506d14610887578063a0cc6a681461088f578063a457c2d714610897578063a6f9dae1146108c3576103a4565b80638da5cb5b116101c35780638da5cb5b1461082b5780638f28397014610833578063949a36521461085957806395d89b411461087f576103a4565b80637ecebe00146107d75780638456cb59146107fd5780638c2bee8014610805576103a4565b806339509351116102ce57806350a6aaf41161026c5780635cfc1a511161023b5780635cfc1a5114610702578063659f50dc1461070a578063664dc7241461078b57806370a08231146107b1576103a4565b806350a6aaf41461068b578063572b6c05146106935780635a049a70146106b95780635c975abb146106fa576103a4565b806340c10f19116102a857806340c10f191461063257806342966c681461065e578063486ff0cd1461067b5780634b71f5c314610683576103a4565b806339509351146105d85780633b6aa12b146106045780633f4ba83a1461062a576103a4565b806323b872dd116103465780632fee80d0116103155780632fee80d01461058457806330adf81f146105aa578063313ce567146105b25780633644e515146105d0576103a4565b806323b872dd146104dc5780632ad3ed6d146105125780632c4d4d18146105385780632cd271e71461055e576103a4565b8063085fda8311610382578063085fda8314610472578063095ea7b31461047a57806310c8b404146104ba57806318160ddd146104d4576103a4565b80630628922d146103a957806306fdde03146103d1578063075461721461044e575b600080fd5b6103cf600480360360208110156103bf57600080fd5b50356001600160a01b0316610d8e565b005b6103d9610edc565b6040805160208082528351818301528351919283929083019185019080838360005b838110156104135781810151838201526020016103fb565b50505050905090810190601f1680156104405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610456610f6a565b604080516001600160a01b039092168252519081900360200190f35b6103cf610f79565b6104a66004803603604081101561049057600080fd5b506001600160a01b038135169060200135610fa3565b604080519115158252519081900360200190f35b6104c2610fb9565b60408051918252519081900360200190f35b6104c2610fdd565b6104a6600480360360608110156104f257600080fd5b506001600160a01b03813581169160208101359091169060400135610fe4565b6104a66004803603602081101561052857600080fd5b50356001600160a01b03166110f6565b6103cf6004803603602081101561054e57600080fd5b50356001600160a01b031661110b565b6103cf6004803603602081101561057457600080fd5b50356001600160a01b0316611243565b6103cf6004803603602081101561059a57600080fd5b50356001600160a01b0316611332565b6104c261147c565b6105ba6114a0565b6040805160ff9092168252519081900360200190f35b6104c26114a9565b6104a6600480360360408110156105ee57600080fd5b506001600160a01b0381351690602001356114af565b6103cf6004803603602081101561061a57600080fd5b50356001600160a01b03166114f0565b6103cf61166b565b6103cf6004803603604081101561064857600080fd5b506001600160a01b03813516906020013561177a565b6103cf6004803603602081101561067457600080fd5b503561190f565b6103d9611994565b6104c26119b3565b6104566119d7565b6104a6600480360360208110156106a957600080fd5b50356001600160a01b03166119e6565b6103cf600480360360a08110156106cf57600080fd5b506001600160a01b038135169060208101359060ff60408201351690606081013590608001356119fa565b6104a6611b5b565b6104c2611b6b565b6103cf6004803603606081101561072057600080fd5b81019060208101813564010000000081111561073b57600080fd5b82018360208201111561074d57600080fd5b8035906020019184600183028401116401000000008311171561076f57600080fd5b91935091506001600160a01b0381358116916020013516611b71565b6103cf600480360360208110156107a157600080fd5b50356001600160a01b0316611ce6565b6104c2600480360360208110156107c757600080fd5b50356001600160a01b0316611ea5565b6104c2600480360360208110156107ed57600080fd5b50356001600160a01b0316611ec0565b6103cf611edb565b6103cf6004803603602081101561081b57600080fd5b50356001600160a01b0316611fde565b61045661209a565b6103cf6004803603602081101561084957600080fd5b50356001600160a01b03166120a9565b6103cf6004803603602081101561086f57600080fd5b50356001600160a01b03166121aa565b6103d961226a565b6104566122c5565b6104c26122d4565b6104a6600480360360408110156108ad57600080fd5b506001600160a01b0381351690602001356122f8565b6103cf600480360360208110156108d957600080fd5b50356001600160a01b0316612334565b610456612482565b6104a66004803603604081101561090757600080fd5b506001600160a01b038135169060200135612491565b6103cf600480360361012081101561093457600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e08101359061010001356125a0565b6103cf6004803603602081101561099257600080fd5b50356001600160a01b03166126f9565b6103cf60048036036101408110156109b957600080fd5b8101906020810181356401000000008111156109d457600080fd5b8201836020820111156109e657600080fd5b80359060200191846001830284011164010000000083111715610a0857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050640100000000811115610a5b57600080fd5b820183602082011115610a6d57600080fd5b80359060200191846001830284011164010000000083111715610a8f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505060ff8335169350506001600160a01b0360208301358116926040810135821692506060810135821691608082013581169160a081013582169160c082013581169160e0013516612835565b6103cf6004803603610120811015610b2857600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e0810135906101000135612c03565b6103cf60048036036020811015610b8657600080fd5b50356001600160a01b0316612d44565b6104c2612f0f565b6103cf60048036036020811015610bb457600080fd5b50356001600160a01b0316612f33565b6103cf600480360360e0811015610bda57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561306f565b6104c2613217565b61045661323b565b6104c260048036036040811015610c3b57600080fd5b506001600160a01b038135811691602001351661324f565b61045661327a565b6103cf6004803603610120811015610c7257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e0810135906101000135613289565b6103cf6004803603610120811015610cd157600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e08101359061010001356133c2565b610d4560048036036040811015610d2f57600080fd5b506001600160a01b038135169060200135613568565b60405180826002811115610d5557fe5b60ff16815260200191505060405180910390f35b610456613593565b6103cf60048036036020811015610d8757600080fd5b50356135a2565b600c546001600160a01b03163314610ded576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f7420746865206f776e65720000000000604482015290519081900360640190fd5b600654600160a01b900460ff1615610e3a576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116610e84576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600b80546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f4a85a5117c27071f301f0a758ea45cef77712d3d8358f0883b21c46ee1693d6790600090a4505050565b600d805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f625780601f10610f3757610100808354040283529160200191610f62565b820191906000526020600020905b815481529060010190602001808311610f4557829003601f168201915b505050505081565b600a546001600160a01b031681565b6000610f836136dd565b90506000610f9082611ea5565b9050610f9f82826064016136fd565b5050565b6000610fb03384846137ef565b50600192915050565b7f808c10407a796f3ef2c7ea38c0638ea9d2b8a1c63e3ca9e1f56ce84ae59df73c81565b6003545b90565b600654600090600160a01b900460ff1615611034576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6001600160a01b038416600090815260086020526040902054849060ff16156110a1576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b82806000106110e15760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b6110ec8686866138db565b9695505050505050565b60086020526000908152604090205460ff1681565b600b546001600160a01b031633146111545760405162461bcd60e51b81526004018080602001828103825260218152602001806143b36021913960400191505060405180910390fd5b600654600160a01b900460ff16156111a1576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b0381166111eb576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600a80546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f6970e71b2bda096f4eb3290c554af7a888cca0ef8b95da09c55b23c6bb30e38190600090a4505050565b6009546001600160a01b03163314611290576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b806001600160a01b0381166112da576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600680546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f8b1ee37fa817a066fe12c7c9bf109c0c9f8f03ef0a5cfe0c03d5196e8c2e465790600090a4505050565b6009546001600160a01b0316331461137f576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b600654600160a01b900460ff16156113cc576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116611416576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600f80546001600160a01b03848116610100908102610100600160a81b0319841617938490556040519281900482169333939190049091169083907fd8d09cf07cabd1c0519931ab387ce1b6e580584a26fb2787b8ed7f446c34603f90600090a4505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b600f5460ff1681565b60105481565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091610fb09185906114eb908663ffffffff61392d16565b6137ef565b600654600160a01b900460ff161561153d576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b600f5461010090046001600160a01b031633146115a1576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f74207468652077697065720000000000604482015290519081900360640190fd5b6001600160a01b038116600090815260086020526040902054819060ff16611610576040805162461bcd60e51b815260206004820152601e60248201527f74686973206163636f756e74206973206e6f742070726f686962697465640000604482015290519081900360640190fd5b600061161b83611ea5565b9050611627838261398e565b6040805182815290516001600160a01b038516917f0c33c145e6d9d2a0b65f5f10329f8667d6538b98b55d7895abec66e917019a54919081900360200190a2505050565b6006546001600160a01b031633146116ca576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f74207468652070617573657200000000604482015290519081900360640190fd5b600654600160a01b900460ff16611728576040805162461bcd60e51b815260206004820152601d60248201527f74686973206973206e6f7420612070617573656420636f6e7472616374000000604482015290519081900360640190fd5b6006805460ff60a01b19169081905560408051600160a01b90920460ff16151582525133917f5a9dfee0981174e5203ccf9368a8cabb254f9dea6ca43f96b4bbd10c69415d8a919081900360200190a2565b600a546001600160a01b031633146117d9576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f7420746865206d696e74657200000000604482015290519081900360640190fd5b600654600160a01b900460ff1615611826576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b61183e81611832610fdd565b9063ffffffff61392d16565b60045481111561187f5760405162461bcd60e51b81526004018080602001828103825260218152602001806145bd6021913960400191505060405180910390fd5b81806000106118bf5760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b6118c984846136fd565b60408051848152905133916001600160a01b038716917fbcad3d7d3dfccb90d49c6063bf70f828901fefc88937d90af74e58e6e55bc39d9181900360200190a350505050565b808060001061194f5760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b611959338361398e565b604080518381529051339182917fdbdf9b8e4b75e75b162d151ec8fc7f0561cabab5fcccfa2600be62223e4300c49181900360200190a35050565b6040805180820190915260058152640322e302e360dc1b602082015290565b7fb70559e94cbda91958ebec07f9b65b3b490097c8d25c8dacd71105df1015b6d881565b6005546001600160a01b031681565b6013546001600160a01b0390811691161490565b600654600160a01b900460ff1615611a47576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b611a518585613a69565b604080517f158b0a9edf7a828aad02f63cd515c68ef2f50ba807396f6d12842833a159742960208201526001600160a01b0387168183018190526060828101889052835180840390910181526080909201909252601054909190611ab89086868686613ad7565b6001600160a01b031614611afd5760405162461bcd60e51b815260040180806020018281038252602681526020018061436d6026913960400191505060405180910390fd5b6001600160a01b0386166000818152601160209081526040808320898452909152808220805460ff19166002179055518792917f1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d8191a3505050505050565b600654600160a01b900460ff1681565b60045481565b601354600160a01b900460ff1615611bd0576040805162461bcd60e51b815260206004820152601f60248201527f436f6e747261637420697320616c726561647920696e697469616c697a656400604482015290519081900360640190fd5b611bdc600d8585614137565b50600f8054610100600160a81b0319166101006001600160a01b038516810291909117909155600d8054604080516020600260018516159096026000190190931694909404601f8101839004830285018301909152808452611caf939291830182828015611c8b5780601f10611c6057610100808354040283529160200191611c8b565b820191906000526020600020905b815481529060010190602001808311611c6e57829003601f168201915b5050505050604051806040016040528060018152602001601960f91b815250613b2e565b60105560138054600160a01b60ff60a01b19909116176001600160a01b0319166001600160a01b0392909216919091179055505050565b6007546001600160a01b03163314611d45576040805162461bcd60e51b815260206004820181905260248201527f7468652073656e646572206973206e6f74207468652070726f68696269746572604482015290519081900360640190fd5b600654600160a01b900460ff1615611d92576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116611ddc576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b6001600160a01b038216600090815260086020526040902054829060ff16611e4b576040805162461bcd60e51b815260206004820152601e60248201527f74686973206163636f756e74206973206e6f742070726f686962697465640000604482015290519081900360640190fd5b6001600160a01b0383166000818152600860209081526040808320805460ff191690558051928352513393927fab0ab2fa6ff81b10c5afab4726a665d4379f2d0acaaafbe4c4d737ade05a8e4692908290030190a3505050565b6001600160a01b031660009081526001602052604090205490565b6001600160a01b031660009081526012602052604090205490565b6006546001600160a01b03163314611f3a576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f74207468652070617573657200000000604482015290519081900360640190fd5b600654600160a01b900460ff1615611f87576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6006805460ff60a01b1916600160a01b90811791829055604080519190920460ff1615158152905133917f5a9dfee0981174e5203ccf9368a8cabb254f9dea6ca43f96b4bbd10c69415d8a919081900360200190a2565b600654600160a01b900460ff161561202b576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6009546001600160a01b03163314612078576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b601380546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b031681565b600c546001600160a01b03163314612108576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f7420746865206f776e65720000000000604482015290519081900360640190fd5b806001600160a01b038116612152576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600980546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f4eb572e99196bed0270fbd5b17a948e19c3f50a97838cb0d2a75a823ff8e6c5090600090a4505050565b806001600160a01b0381166121f4576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600f5461010090046001600160a01b0316156122415760405162461bcd60e51b81526004018080602001828103825260248152602001806143496024913960400191505060405180910390fd5b50600f80546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600e805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f625780601f10610f3757610100808354040283529160200191610f62565b6006546001600160a01b031681565b7f7c7c6cdb67a18743f49ec6fa9b35f50d52ed05cbed4cc592e13b44501c1a226781565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091610fb09185906114eb908663ffffffff613ba016565b600c546001600160a01b03163314612393576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f7420746865206f776e65720000000000604482015290519081900360640190fd5b600654600160a01b900460ff16156123e0576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b03811661242a576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600c80546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f381c0d11398486654573703c51ee8210ce9461764d133f9f0e53b6a53970533190600090a4505050565b600b546001600160a01b031681565b600654600090600160a01b900460ff16156124e1576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b3360008181526008602052604090205460ff1615612543576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b82806000106125835760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b61259561258e613be2565b8686613c50565b506001949350505050565b600654600160a01b900460ff16156125ed576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6125f989858888613d94565b604080517fb70559e94cbda91958ebec07f9b65b3b490097c8d25c8dacd71105df1015b6d860208201526001600160a01b03808c16828401819052908b166060830152608082018a905260a0820189905260c0820188905260e08083018890528351808403909101815261010090920190925260105490919061267f9086868686613ad7565b6001600160a01b0316146126c45760405162461bcd60e51b81526004018080602001828103825260358152602001806144516035913960400191505060405180910390fd5b6126ce8a86613e20565b6126ed8a8a6114eb8b6126e18f8f61324f565b9063ffffffff613ba016565b50505050505050505050565b6009546001600160a01b03163314612746576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b600654600160a01b900460ff1615612793576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b0381166127dd576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600580546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907fc4d5c17597bd0c5594a7545f36de213c6a58e2f235b165887331fe368618197090600090a4505050565b600054610100900460ff168061284e575061284e613e7a565b8061285c575060005460ff16155b6128975760405162461bcd60e51b815260040180806020018281038252602e8152602001806143d4602e913960400191505060405180910390fd5b600054610100900460ff161580156128c2576000805460ff1961ff0019909116610100171660011790555b6001600160a01b03881661291d576040805162461bcd60e51b815260206004820152601a60248201527f5f6f776e657220697320746865207a65726f2061646472657373000000000000604482015290519081900360640190fd5b6001600160a01b038716612978576040805162461bcd60e51b815260206004820152601a60248201527f5f61646d696e20697320746865207a65726f2061646472657373000000000000604482015290519081900360640190fd5b6001600160a01b0386166129d3576040805162461bcd60e51b815260206004820152601b60248201527f5f63617070657220697320746865207a65726f20616464726573730000000000604482015290519081900360640190fd5b6001600160a01b038516612a2e576040805162461bcd60e51b815260206004820152601f60248201527f5f70726f6869626974657220697320746865207a65726f206164647265737300604482015290519081900360640190fd5b6001600160a01b038416612a89576040805162461bcd60e51b815260206004820152601b60248201527f5f70617573657220697320746865207a65726f20616464726573730000000000604482015290519081900360640190fd5b6001600160a01b038316612ae4576040805162461bcd60e51b815260206004820181905260248201527f5f6d696e74657241646d696e20697320746865207a65726f2061646472657373604482015290519081900360640190fd5b6001600160a01b038216612b3f576040805162461bcd60e51b815260206004820152601b60248201527f5f6d696e74657220697320746865207a65726f20616464726573730000000000604482015290519081900360640190fd5b8a51612b5290600d9060208e01906141b5565b508951612b6690600e9060208d01906141b5565b50600f805460ff191660ff8b16179055600c80546001600160a01b03199081166001600160a01b038b8116919091179092556009805482168a8416179055600580548216898416179055600780548216888416179055600680548216878416179055600b80548216868416179055600a80549091169184169190911790558015612bf6576000805461ff00191690555b5050505050505050505050565b600654600160a01b900460ff1615612c50576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b612c5c89858888613d94565b604080517f424222bb050a1f7f14017232a5671f2680a2d3420f504bd565cf03035c53198a60208201526001600160a01b03808c16828401819052908b166060830152608082018a905260a0820189905260c0820188905260e080830188905283518084039091018152610100909201909252601054909190612ce29086868686613ad7565b6001600160a01b031614612d275760405162461bcd60e51b81526004018080602001828103825260358152602001806142816035913960400191505060405180910390fd5b612d318a86613e20565b6126ed8a8a6114eb8b6118328f8f61324f565b6007546001600160a01b03163314612da3576040805162461bcd60e51b815260206004820181905260248201527f7468652073656e646572206973206e6f74207468652070726f68696269746572604482015290519081900360640190fd5b600654600160a01b900460ff1615612df0576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116612e3a576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b6001600160a01b038216600090815260086020526040902054829060ff1615612ea7576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b6001600160a01b038316600081815260086020908152604091829020805460ff191660011790819055825160ff919091161515815291513393927fab0ab2fa6ff81b10c5afab4726a665d4379f2d0acaaafbe4c4d737ade05a8e4692908290030190a3505050565b7f424222bb050a1f7f14017232a5671f2680a2d3420f504bd565cf03035c53198a81565b6009546001600160a01b03163314612f80576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b600654600160a01b900460ff1615612fcd576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116613017576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600780546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f85ae865187b1d7c0069f5fab638cbfcb8f3f9d23bc090e1084abc0dc42def0d290600090a4505050565b600654600160a01b900460ff16156130bc576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b42841015613111576040805162461bcd60e51b815260206004820152601e60248201527f46696174546f6b656e56323a207065726d697420697320657870697265640000604482015290519081900360640190fd5b6001600160a01b0380881660008181526012602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c992810192909252818301849052938a1660608201526080810189905260a081019390935260c08084018890528151808503909101815260e090930190526010546131a79086868686613ad7565b6001600160a01b031614613202576040805162461bcd60e51b815260206004820152601960248201527f7065726d69743a20696e76616c6964207369676e617475726500000000000000604482015290519081900360640190fd5b61320d8888886137ef565b5050505050505050565b7f158b0a9edf7a828aad02f63cd515c68ef2f50ba807396f6d12842833a159742981565b600f5461010090046001600160a01b031681565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6007546001600160a01b031681565b600654600160a01b900460ff16156132d6576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6132e289858888613d94565b604080517f808c10407a796f3ef2c7ea38c0638ea9d2b8a1c63e3ca9e1f56ce84ae59df73c60208201526001600160a01b03808c16828401819052908b166060830152608082018a905260a0820189905260c0820188905260e0808301889052835180840390910181526101009092019092526010549091906133689086868686613ad7565b6001600160a01b0316146133ad5760405162461bcd60e51b815260040180806020018281038252602b8152602001806144cc602b913960400191505060405180910390fd5b6133b78a86613e20565b6126ed8a8a8a6137ef565b600654600160a01b900460ff161561340f576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6001600160a01b038916600090815260086020526040902054899060ff161561347c576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b6134888a868989613d94565b604080517f7c7c6cdb67a18743f49ec6fa9b35f50d52ed05cbed4cc592e13b44501c1a226760208201526001600160a01b03808d16828401819052908c166060830152608082018b905260a082018a905260c0820189905260e08083018990528351808403909101815261010090920190925260105490919061350e9087878786613ad7565b6001600160a01b0316146135535760405162461bcd60e51b815260040180806020018281038252602c815260200180614402602c913960400191505060405180910390fd5b61355d8b87613e20565b612bf68b8b8b613c50565b6001600160a01b03919091166000908152601160209081526040808320938352929052205460ff1690565b6009546001600160a01b031681565b6005546001600160a01b03163314613601576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f74207468652063617070657200000000604482015290519081900360640190fd5b600654600160a01b900460ff161561364e576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b808060001061368e5760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b81613697610fdd565b11156136d45760405162461bcd60e51b815260040180806020018281038252602981526020018061451b6029913960400191505060405180910390fd5b610f9f82613e80565b6000601836106136f6575060131936013560601c610fe1565b5033610fe1565b6001600160a01b038216613758576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60035461376b908263ffffffff61392d16565b6003556001600160a01b038216600090815260016020526040902054613797908263ffffffff61392d16565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0383166138345760405162461bcd60e51b81526004018080602001828103825260248152602001806144f76024913960400191505060405180910390fd5b6001600160a01b0382166138795760405162461bcd60e51b81526004018080602001828103825260228152602001806143076022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006138e8848484613c50565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546139239186916114eb908663ffffffff613ba016565b5060019392505050565b600082820183811015613987576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0382166139d35760405162461bcd60e51b81526004018080602001828103825260218152602001806144866021913960400191505060405180910390fd5b6003546139e6908263ffffffff613ba016565b6003556001600160a01b038216600090815260016020526040902054613a12908263ffffffff613ba016565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6001600160a01b038216600090815260116020908152604080832084845290915281205460ff166002811115613a9b57fe5b14610f9f5760405162461bcd60e51b815260040180806020018281038252602e81526020018061456a602e913960400191505060405180910390fd5b80516020808301919091206040805161190160f01b81850152602281018990526042808201939093528151808203909301835260620190528051910120600090613b2381878787613eb5565b979650505050505050565b8151602092830120815191830191909120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818601528082019390935260608301919091524660808301523060a0808401919091528151808403909101815260c09092019052805191012090565b600061398783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250614033565b600060183610801590613bf95750613bf9336119e6565b15613c4b57613c446000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050601319360191506140ca9050565b9050610fe1565b503390565b6001600160a01b038316613c955760405162461bcd60e51b81526004018080602001828103825260258152602001806144a76025913960400191505060405180910390fd5b6001600160a01b038216613cda5760405162461bcd60e51b815260040180806020018281038252602381526020018061423e6023913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054613d03908263ffffffff613ba016565b6001600160a01b038085166000908152600160205260408082209390935590841681522054613d38908263ffffffff61392d16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b814211613dd25760405162461bcd60e51b815260040180806020018281038252602b8152602001806142b6602b913960400191505060405180910390fd5b804210613e105760405162461bcd60e51b81526004018080602001828103825260258152602001806145986025913960400191505060405180910390fd5b613e1a8484613a69565b50505050565b6001600160a01b0382166000818152601160209081526040808320858452909152808220805460ff19166001179055518392917f98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a591a35050565b303b1590565b6004819055604051339082907f3bb5a3ed42af6c70969e54bbe40e4bba09c07f42c120cbec4ac0ee7eb0057fc990600090a350565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115613f165760405162461bcd60e51b81526004018080602001828103825260268152602001806145446026913960400191505060405180910390fd5b8360ff16601b14158015613f2e57508360ff16601c14155b15613f6a5760405162461bcd60e51b81526004018080602001828103825260268152602001806142e16026913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015613fc2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661402a576040805162461bcd60e51b815260206004820152601c60248201527f45435265636f7665723a20696e76616c6964207369676e617475726500000000604482015290519081900360640190fd5b95945050505050565b600081848411156140c25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561408757818101518382015260200161406f565b50505050905090810190601f1680156140b45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008160140183511015614125576040805162461bcd60e51b815260206004820152601b60248201527f72656164416464726573733a206461746120746f6f2073686f72740000000000604482015290519081900360640190fd5b5001601401516001600160a01b031690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106141785782800160ff198235161785556141a5565b828001600101855582156141a5579182015b828111156141a557823582559160200191906001019061418a565b506141b1929150614223565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106141f657805160ff19168380011785556141a5565b828001600101855582156141a5579182015b828111156141a5578251825591602001919060010190614208565b610fe191905b808211156141b1576000815560010161422956fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573737468652073656e646572206973206e6f74207468652061646d696e0000000000696e637265617365416c6c6f77616e636557697468417574686f72697a6174696f6e3a20696e76616c6964207369676e617475726546696174546f6b656e56323a20617574686f72697a6174696f6e206973206e6f74207965742076616c696445435265636f7665723a20696e76616c6964207369676e6174757265202776272076616c756545524332303a20617070726f766520746f20746865207a65726f206164647265737374686973206163636f756e7420697320746865207a65726f20616464726573737468652077697065722063616e206f6e6c7920626520696e69746961746564206f6e636563616e63656c417574686f72697a6174696f6e3a20696e76616c6964207369676e61747572657468697320697320612070617573656420636f6e7472616374000000000000007468652073656e646572206973206e6f7420746865206d696e74657241646d696e496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65647472616e7366657257697468417574686f72697a6174696f6e3a20696e76616c6964207369676e61747572657468697320616d6f756e74206973206e6f742061206e61747572616c206e756d6265726465637265617365416c6c6f77616e636557697468417574686f72697a6174696f6e3a20696e76616c6964207369676e617475726545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f2061646472657373617070726f766557697468417574686f72697a6174696f6e3a20696e76616c6964207369676e617475726545524332303a20617070726f76652066726f6d20746865207a65726f20616464726573737468697320616d6f756e74206973206c657373207468616e2074686520746f74616c79537570706c7945435265636f7665723a20696e76616c6964207369676e6174757265202773272076616c756546696174546f6b656e56323a20617574686f72697a6174696f6e2069732075736564206f722063616e63656c656446696174546f6b656e56323a20617574686f72697a6174696f6e20697320657870697265647468697320616d6f756e74206973206d6f7265207468616e206361706163697479a2646970667358221220db61dda377ec860fe1b85c7101b9674a33f39747ab8607173a3da14773b5142b64736f6c63430006090033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106103a45760003560e01c80637ecebe00116101e9578063b89da6421161010f578063dcb413c8116100ad578063e3ee160e1161007c578063e3ee160e14610cba578063e94a010214610d19578063f851a44014610d69578063ff2ad8e414610d71576103a4565b8063dcb413c814610c1d578063dd62ed3e14610c25578063dd75049b14610c53578063e1560fd314610c5b576103a4565b8063c7b84f8d116100e9578063c7b84f8d14610b96578063cffdd46c14610b9e578063d505accf14610bc4578063d916948714610c15576103a4565b8063b89da642146109a2578063c237108f14610b11578063c4e1ccf214610b70576103a4565b80639fd0506d11610187578063a754d48f11610156578063a754d48f146108e9578063a9059cbb146108f1578063b00860951461091d578063b0e717661461097c576103a4565b80639fd0506d14610887578063a0cc6a681461088f578063a457c2d714610897578063a6f9dae1146108c3576103a4565b80638da5cb5b116101c35780638da5cb5b1461082b5780638f28397014610833578063949a36521461085957806395d89b411461087f576103a4565b80637ecebe00146107d75780638456cb59146107fd5780638c2bee8014610805576103a4565b806339509351116102ce57806350a6aaf41161026c5780635cfc1a511161023b5780635cfc1a5114610702578063659f50dc1461070a578063664dc7241461078b57806370a08231146107b1576103a4565b806350a6aaf41461068b578063572b6c05146106935780635a049a70146106b95780635c975abb146106fa576103a4565b806340c10f19116102a857806340c10f191461063257806342966c681461065e578063486ff0cd1461067b5780634b71f5c314610683576103a4565b806339509351146105d85780633b6aa12b146106045780633f4ba83a1461062a576103a4565b806323b872dd116103465780632fee80d0116103155780632fee80d01461058457806330adf81f146105aa578063313ce567146105b25780633644e515146105d0576103a4565b806323b872dd146104dc5780632ad3ed6d146105125780632c4d4d18146105385780632cd271e71461055e576103a4565b8063085fda8311610382578063085fda8314610472578063095ea7b31461047a57806310c8b404146104ba57806318160ddd146104d4576103a4565b80630628922d146103a957806306fdde03146103d1578063075461721461044e575b600080fd5b6103cf600480360360208110156103bf57600080fd5b50356001600160a01b0316610d8e565b005b6103d9610edc565b6040805160208082528351818301528351919283929083019185019080838360005b838110156104135781810151838201526020016103fb565b50505050905090810190601f1680156104405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610456610f6a565b604080516001600160a01b039092168252519081900360200190f35b6103cf610f79565b6104a66004803603604081101561049057600080fd5b506001600160a01b038135169060200135610fa3565b604080519115158252519081900360200190f35b6104c2610fb9565b60408051918252519081900360200190f35b6104c2610fdd565b6104a6600480360360608110156104f257600080fd5b506001600160a01b03813581169160208101359091169060400135610fe4565b6104a66004803603602081101561052857600080fd5b50356001600160a01b03166110f6565b6103cf6004803603602081101561054e57600080fd5b50356001600160a01b031661110b565b6103cf6004803603602081101561057457600080fd5b50356001600160a01b0316611243565b6103cf6004803603602081101561059a57600080fd5b50356001600160a01b0316611332565b6104c261147c565b6105ba6114a0565b6040805160ff9092168252519081900360200190f35b6104c26114a9565b6104a6600480360360408110156105ee57600080fd5b506001600160a01b0381351690602001356114af565b6103cf6004803603602081101561061a57600080fd5b50356001600160a01b03166114f0565b6103cf61166b565b6103cf6004803603604081101561064857600080fd5b506001600160a01b03813516906020013561177a565b6103cf6004803603602081101561067457600080fd5b503561190f565b6103d9611994565b6104c26119b3565b6104566119d7565b6104a6600480360360208110156106a957600080fd5b50356001600160a01b03166119e6565b6103cf600480360360a08110156106cf57600080fd5b506001600160a01b038135169060208101359060ff60408201351690606081013590608001356119fa565b6104a6611b5b565b6104c2611b6b565b6103cf6004803603606081101561072057600080fd5b81019060208101813564010000000081111561073b57600080fd5b82018360208201111561074d57600080fd5b8035906020019184600183028401116401000000008311171561076f57600080fd5b91935091506001600160a01b0381358116916020013516611b71565b6103cf600480360360208110156107a157600080fd5b50356001600160a01b0316611ce6565b6104c2600480360360208110156107c757600080fd5b50356001600160a01b0316611ea5565b6104c2600480360360208110156107ed57600080fd5b50356001600160a01b0316611ec0565b6103cf611edb565b6103cf6004803603602081101561081b57600080fd5b50356001600160a01b0316611fde565b61045661209a565b6103cf6004803603602081101561084957600080fd5b50356001600160a01b03166120a9565b6103cf6004803603602081101561086f57600080fd5b50356001600160a01b03166121aa565b6103d961226a565b6104566122c5565b6104c26122d4565b6104a6600480360360408110156108ad57600080fd5b506001600160a01b0381351690602001356122f8565b6103cf600480360360208110156108d957600080fd5b50356001600160a01b0316612334565b610456612482565b6104a66004803603604081101561090757600080fd5b506001600160a01b038135169060200135612491565b6103cf600480360361012081101561093457600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e08101359061010001356125a0565b6103cf6004803603602081101561099257600080fd5b50356001600160a01b03166126f9565b6103cf60048036036101408110156109b957600080fd5b8101906020810181356401000000008111156109d457600080fd5b8201836020820111156109e657600080fd5b80359060200191846001830284011164010000000083111715610a0857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050640100000000811115610a5b57600080fd5b820183602082011115610a6d57600080fd5b80359060200191846001830284011164010000000083111715610a8f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505060ff8335169350506001600160a01b0360208301358116926040810135821692506060810135821691608082013581169160a081013582169160c082013581169160e0013516612835565b6103cf6004803603610120811015610b2857600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e0810135906101000135612c03565b6103cf60048036036020811015610b8657600080fd5b50356001600160a01b0316612d44565b6104c2612f0f565b6103cf60048036036020811015610bb457600080fd5b50356001600160a01b0316612f33565b6103cf600480360360e0811015610bda57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561306f565b6104c2613217565b61045661323b565b6104c260048036036040811015610c3b57600080fd5b506001600160a01b038135811691602001351661324f565b61045661327a565b6103cf6004803603610120811015610c7257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e0810135906101000135613289565b6103cf6004803603610120811015610cd157600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060ff60c0820135169060e08101359061010001356133c2565b610d4560048036036040811015610d2f57600080fd5b506001600160a01b038135169060200135613568565b60405180826002811115610d5557fe5b60ff16815260200191505060405180910390f35b610456613593565b6103cf60048036036020811015610d8757600080fd5b50356135a2565b600c546001600160a01b03163314610ded576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f7420746865206f776e65720000000000604482015290519081900360640190fd5b600654600160a01b900460ff1615610e3a576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116610e84576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600b80546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f4a85a5117c27071f301f0a758ea45cef77712d3d8358f0883b21c46ee1693d6790600090a4505050565b600d805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f625780601f10610f3757610100808354040283529160200191610f62565b820191906000526020600020905b815481529060010190602001808311610f4557829003601f168201915b505050505081565b600a546001600160a01b031681565b6000610f836136dd565b90506000610f9082611ea5565b9050610f9f82826064016136fd565b5050565b6000610fb03384846137ef565b50600192915050565b7f808c10407a796f3ef2c7ea38c0638ea9d2b8a1c63e3ca9e1f56ce84ae59df73c81565b6003545b90565b600654600090600160a01b900460ff1615611034576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6001600160a01b038416600090815260086020526040902054849060ff16156110a1576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b82806000106110e15760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b6110ec8686866138db565b9695505050505050565b60086020526000908152604090205460ff1681565b600b546001600160a01b031633146111545760405162461bcd60e51b81526004018080602001828103825260218152602001806143b36021913960400191505060405180910390fd5b600654600160a01b900460ff16156111a1576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b0381166111eb576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600a80546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f6970e71b2bda096f4eb3290c554af7a888cca0ef8b95da09c55b23c6bb30e38190600090a4505050565b6009546001600160a01b03163314611290576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b806001600160a01b0381166112da576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600680546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f8b1ee37fa817a066fe12c7c9bf109c0c9f8f03ef0a5cfe0c03d5196e8c2e465790600090a4505050565b6009546001600160a01b0316331461137f576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b600654600160a01b900460ff16156113cc576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116611416576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600f80546001600160a01b03848116610100908102610100600160a81b0319841617938490556040519281900482169333939190049091169083907fd8d09cf07cabd1c0519931ab387ce1b6e580584a26fb2787b8ed7f446c34603f90600090a4505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b600f5460ff1681565b60105481565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091610fb09185906114eb908663ffffffff61392d16565b6137ef565b600654600160a01b900460ff161561153d576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b600f5461010090046001600160a01b031633146115a1576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f74207468652077697065720000000000604482015290519081900360640190fd5b6001600160a01b038116600090815260086020526040902054819060ff16611610576040805162461bcd60e51b815260206004820152601e60248201527f74686973206163636f756e74206973206e6f742070726f686962697465640000604482015290519081900360640190fd5b600061161b83611ea5565b9050611627838261398e565b6040805182815290516001600160a01b038516917f0c33c145e6d9d2a0b65f5f10329f8667d6538b98b55d7895abec66e917019a54919081900360200190a2505050565b6006546001600160a01b031633146116ca576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f74207468652070617573657200000000604482015290519081900360640190fd5b600654600160a01b900460ff16611728576040805162461bcd60e51b815260206004820152601d60248201527f74686973206973206e6f7420612070617573656420636f6e7472616374000000604482015290519081900360640190fd5b6006805460ff60a01b19169081905560408051600160a01b90920460ff16151582525133917f5a9dfee0981174e5203ccf9368a8cabb254f9dea6ca43f96b4bbd10c69415d8a919081900360200190a2565b600a546001600160a01b031633146117d9576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f7420746865206d696e74657200000000604482015290519081900360640190fd5b600654600160a01b900460ff1615611826576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b61183e81611832610fdd565b9063ffffffff61392d16565b60045481111561187f5760405162461bcd60e51b81526004018080602001828103825260218152602001806145bd6021913960400191505060405180910390fd5b81806000106118bf5760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b6118c984846136fd565b60408051848152905133916001600160a01b038716917fbcad3d7d3dfccb90d49c6063bf70f828901fefc88937d90af74e58e6e55bc39d9181900360200190a350505050565b808060001061194f5760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b611959338361398e565b604080518381529051339182917fdbdf9b8e4b75e75b162d151ec8fc7f0561cabab5fcccfa2600be62223e4300c49181900360200190a35050565b6040805180820190915260058152640322e302e360dc1b602082015290565b7fb70559e94cbda91958ebec07f9b65b3b490097c8d25c8dacd71105df1015b6d881565b6005546001600160a01b031681565b6013546001600160a01b0390811691161490565b600654600160a01b900460ff1615611a47576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b611a518585613a69565b604080517f158b0a9edf7a828aad02f63cd515c68ef2f50ba807396f6d12842833a159742960208201526001600160a01b0387168183018190526060828101889052835180840390910181526080909201909252601054909190611ab89086868686613ad7565b6001600160a01b031614611afd5760405162461bcd60e51b815260040180806020018281038252602681526020018061436d6026913960400191505060405180910390fd5b6001600160a01b0386166000818152601160209081526040808320898452909152808220805460ff19166002179055518792917f1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d8191a3505050505050565b600654600160a01b900460ff1681565b60045481565b601354600160a01b900460ff1615611bd0576040805162461bcd60e51b815260206004820152601f60248201527f436f6e747261637420697320616c726561647920696e697469616c697a656400604482015290519081900360640190fd5b611bdc600d8585614137565b50600f8054610100600160a81b0319166101006001600160a01b038516810291909117909155600d8054604080516020600260018516159096026000190190931694909404601f8101839004830285018301909152808452611caf939291830182828015611c8b5780601f10611c6057610100808354040283529160200191611c8b565b820191906000526020600020905b815481529060010190602001808311611c6e57829003601f168201915b5050505050604051806040016040528060018152602001601960f91b815250613b2e565b60105560138054600160a01b60ff60a01b19909116176001600160a01b0319166001600160a01b0392909216919091179055505050565b6007546001600160a01b03163314611d45576040805162461bcd60e51b815260206004820181905260248201527f7468652073656e646572206973206e6f74207468652070726f68696269746572604482015290519081900360640190fd5b600654600160a01b900460ff1615611d92576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116611ddc576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b6001600160a01b038216600090815260086020526040902054829060ff16611e4b576040805162461bcd60e51b815260206004820152601e60248201527f74686973206163636f756e74206973206e6f742070726f686962697465640000604482015290519081900360640190fd5b6001600160a01b0383166000818152600860209081526040808320805460ff191690558051928352513393927fab0ab2fa6ff81b10c5afab4726a665d4379f2d0acaaafbe4c4d737ade05a8e4692908290030190a3505050565b6001600160a01b031660009081526001602052604090205490565b6001600160a01b031660009081526012602052604090205490565b6006546001600160a01b03163314611f3a576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f74207468652070617573657200000000604482015290519081900360640190fd5b600654600160a01b900460ff1615611f87576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6006805460ff60a01b1916600160a01b90811791829055604080519190920460ff1615158152905133917f5a9dfee0981174e5203ccf9368a8cabb254f9dea6ca43f96b4bbd10c69415d8a919081900360200190a2565b600654600160a01b900460ff161561202b576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6009546001600160a01b03163314612078576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b601380546001600160a01b0319166001600160a01b0392909216919091179055565b600c546001600160a01b031681565b600c546001600160a01b03163314612108576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f7420746865206f776e65720000000000604482015290519081900360640190fd5b806001600160a01b038116612152576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600980546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f4eb572e99196bed0270fbd5b17a948e19c3f50a97838cb0d2a75a823ff8e6c5090600090a4505050565b806001600160a01b0381166121f4576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600f5461010090046001600160a01b0316156122415760405162461bcd60e51b81526004018080602001828103825260248152602001806143496024913960400191505060405180910390fd5b50600f80546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600e805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f625780601f10610f3757610100808354040283529160200191610f62565b6006546001600160a01b031681565b7f7c7c6cdb67a18743f49ec6fa9b35f50d52ed05cbed4cc592e13b44501c1a226781565b3360008181526002602090815260408083206001600160a01b03871684529091528120549091610fb09185906114eb908663ffffffff613ba016565b600c546001600160a01b03163314612393576040805162461bcd60e51b815260206004820152601b60248201527f7468652073656e646572206973206e6f7420746865206f776e65720000000000604482015290519081900360640190fd5b600654600160a01b900460ff16156123e0576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b03811661242a576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600c80546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f381c0d11398486654573703c51ee8210ce9461764d133f9f0e53b6a53970533190600090a4505050565b600b546001600160a01b031681565b600654600090600160a01b900460ff16156124e1576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b3360008181526008602052604090205460ff1615612543576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b82806000106125835760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b61259561258e613be2565b8686613c50565b506001949350505050565b600654600160a01b900460ff16156125ed576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6125f989858888613d94565b604080517fb70559e94cbda91958ebec07f9b65b3b490097c8d25c8dacd71105df1015b6d860208201526001600160a01b03808c16828401819052908b166060830152608082018a905260a0820189905260c0820188905260e08083018890528351808403909101815261010090920190925260105490919061267f9086868686613ad7565b6001600160a01b0316146126c45760405162461bcd60e51b81526004018080602001828103825260358152602001806144516035913960400191505060405180910390fd5b6126ce8a86613e20565b6126ed8a8a6114eb8b6126e18f8f61324f565b9063ffffffff613ba016565b50505050505050505050565b6009546001600160a01b03163314612746576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b600654600160a01b900460ff1615612793576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b0381166127dd576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600580546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907fc4d5c17597bd0c5594a7545f36de213c6a58e2f235b165887331fe368618197090600090a4505050565b600054610100900460ff168061284e575061284e613e7a565b8061285c575060005460ff16155b6128975760405162461bcd60e51b815260040180806020018281038252602e8152602001806143d4602e913960400191505060405180910390fd5b600054610100900460ff161580156128c2576000805460ff1961ff0019909116610100171660011790555b6001600160a01b03881661291d576040805162461bcd60e51b815260206004820152601a60248201527f5f6f776e657220697320746865207a65726f2061646472657373000000000000604482015290519081900360640190fd5b6001600160a01b038716612978576040805162461bcd60e51b815260206004820152601a60248201527f5f61646d696e20697320746865207a65726f2061646472657373000000000000604482015290519081900360640190fd5b6001600160a01b0386166129d3576040805162461bcd60e51b815260206004820152601b60248201527f5f63617070657220697320746865207a65726f20616464726573730000000000604482015290519081900360640190fd5b6001600160a01b038516612a2e576040805162461bcd60e51b815260206004820152601f60248201527f5f70726f6869626974657220697320746865207a65726f206164647265737300604482015290519081900360640190fd5b6001600160a01b038416612a89576040805162461bcd60e51b815260206004820152601b60248201527f5f70617573657220697320746865207a65726f20616464726573730000000000604482015290519081900360640190fd5b6001600160a01b038316612ae4576040805162461bcd60e51b815260206004820181905260248201527f5f6d696e74657241646d696e20697320746865207a65726f2061646472657373604482015290519081900360640190fd5b6001600160a01b038216612b3f576040805162461bcd60e51b815260206004820152601b60248201527f5f6d696e74657220697320746865207a65726f20616464726573730000000000604482015290519081900360640190fd5b8a51612b5290600d9060208e01906141b5565b508951612b6690600e9060208d01906141b5565b50600f805460ff191660ff8b16179055600c80546001600160a01b03199081166001600160a01b038b8116919091179092556009805482168a8416179055600580548216898416179055600780548216888416179055600680548216878416179055600b80548216868416179055600a80549091169184169190911790558015612bf6576000805461ff00191690555b5050505050505050505050565b600654600160a01b900460ff1615612c50576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b612c5c89858888613d94565b604080517f424222bb050a1f7f14017232a5671f2680a2d3420f504bd565cf03035c53198a60208201526001600160a01b03808c16828401819052908b166060830152608082018a905260a0820189905260c0820188905260e080830188905283518084039091018152610100909201909252601054909190612ce29086868686613ad7565b6001600160a01b031614612d275760405162461bcd60e51b81526004018080602001828103825260358152602001806142816035913960400191505060405180910390fd5b612d318a86613e20565b6126ed8a8a6114eb8b6118328f8f61324f565b6007546001600160a01b03163314612da3576040805162461bcd60e51b815260206004820181905260248201527f7468652073656e646572206973206e6f74207468652070726f68696269746572604482015290519081900360640190fd5b600654600160a01b900460ff1615612df0576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116612e3a576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b6001600160a01b038216600090815260086020526040902054829060ff1615612ea7576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b6001600160a01b038316600081815260086020908152604091829020805460ff191660011790819055825160ff919091161515815291513393927fab0ab2fa6ff81b10c5afab4726a665d4379f2d0acaaafbe4c4d737ade05a8e4692908290030190a3505050565b7f424222bb050a1f7f14017232a5671f2680a2d3420f504bd565cf03035c53198a81565b6009546001600160a01b03163314612f80576040805162461bcd60e51b815260206004820152601b6024820152600080516020614261833981519152604482015290519081900360640190fd5b600654600160a01b900460ff1615612fcd576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b806001600160a01b038116613017576040805162461bcd60e51b81526020600482018190526024820152600080516020614329833981519152604482015290519081900360640190fd5b600780546001600160a01b038481166001600160a01b03198316179283905560405191811692339291169083907f85ae865187b1d7c0069f5fab638cbfcb8f3f9d23bc090e1084abc0dc42def0d290600090a4505050565b600654600160a01b900460ff16156130bc576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b42841015613111576040805162461bcd60e51b815260206004820152601e60248201527f46696174546f6b656e56323a207065726d697420697320657870697265640000604482015290519081900360640190fd5b6001600160a01b0380881660008181526012602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c992810192909252818301849052938a1660608201526080810189905260a081019390935260c08084018890528151808503909101815260e090930190526010546131a79086868686613ad7565b6001600160a01b031614613202576040805162461bcd60e51b815260206004820152601960248201527f7065726d69743a20696e76616c6964207369676e617475726500000000000000604482015290519081900360640190fd5b61320d8888886137ef565b5050505050505050565b7f158b0a9edf7a828aad02f63cd515c68ef2f50ba807396f6d12842833a159742981565b600f5461010090046001600160a01b031681565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6007546001600160a01b031681565b600654600160a01b900460ff16156132d6576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6132e289858888613d94565b604080517f808c10407a796f3ef2c7ea38c0638ea9d2b8a1c63e3ca9e1f56ce84ae59df73c60208201526001600160a01b03808c16828401819052908b166060830152608082018a905260a0820189905260c0820188905260e0808301889052835180840390910181526101009092019092526010549091906133689086868686613ad7565b6001600160a01b0316146133ad5760405162461bcd60e51b815260040180806020018281038252602b8152602001806144cc602b913960400191505060405180910390fd5b6133b78a86613e20565b6126ed8a8a8a6137ef565b600654600160a01b900460ff161561340f576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b6001600160a01b038916600090815260086020526040902054899060ff161561347c576040805162461bcd60e51b815260206004820152601a6024820152791d1a1a5cc81858d8dbdd5b9d081a5cc81c1c9bda1a589a5d195960321b604482015290519081900360640190fd5b6134888a868989613d94565b604080517f7c7c6cdb67a18743f49ec6fa9b35f50d52ed05cbed4cc592e13b44501c1a226760208201526001600160a01b03808d16828401819052908c166060830152608082018b905260a082018a905260c0820189905260e08083018990528351808403909101815261010090920190925260105490919061350e9087878786613ad7565b6001600160a01b0316146135535760405162461bcd60e51b815260040180806020018281038252602c815260200180614402602c913960400191505060405180910390fd5b61355d8b87613e20565b612bf68b8b8b613c50565b6001600160a01b03919091166000908152601160209081526040808320938352929052205460ff1690565b6009546001600160a01b031681565b6005546001600160a01b03163314613601576040805162461bcd60e51b815260206004820152601c60248201527f7468652073656e646572206973206e6f74207468652063617070657200000000604482015290519081900360640190fd5b600654600160a01b900460ff161561364e576040805162461bcd60e51b81526020600482015260196024820152600080516020614393833981519152604482015290519081900360640190fd5b808060001061368e5760405162461bcd60e51b815260040180806020018281038252602381526020018061442e6023913960400191505060405180910390fd5b81613697610fdd565b11156136d45760405162461bcd60e51b815260040180806020018281038252602981526020018061451b6029913960400191505060405180910390fd5b610f9f82613e80565b6000601836106136f6575060131936013560601c610fe1565b5033610fe1565b6001600160a01b038216613758576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b60035461376b908263ffffffff61392d16565b6003556001600160a01b038216600090815260016020526040902054613797908263ffffffff61392d16565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0383166138345760405162461bcd60e51b81526004018080602001828103825260248152602001806144f76024913960400191505060405180910390fd5b6001600160a01b0382166138795760405162461bcd60e51b81526004018080602001828103825260228152602001806143076022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006138e8848484613c50565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546139239186916114eb908663ffffffff613ba016565b5060019392505050565b600082820183811015613987576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0382166139d35760405162461bcd60e51b81526004018080602001828103825260218152602001806144866021913960400191505060405180910390fd5b6003546139e6908263ffffffff613ba016565b6003556001600160a01b038216600090815260016020526040902054613a12908263ffffffff613ba016565b6001600160a01b0383166000818152600160209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b6001600160a01b038216600090815260116020908152604080832084845290915281205460ff166002811115613a9b57fe5b14610f9f5760405162461bcd60e51b815260040180806020018281038252602e81526020018061456a602e913960400191505060405180910390fd5b80516020808301919091206040805161190160f01b81850152602281018990526042808201939093528151808203909301835260620190528051910120600090613b2381878787613eb5565b979650505050505050565b8151602092830120815191830191909120604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818601528082019390935260608301919091524660808301523060a0808401919091528151808403909101815260c09092019052805191012090565b600061398783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250614033565b600060183610801590613bf95750613bf9336119e6565b15613c4b57613c446000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050601319360191506140ca9050565b9050610fe1565b503390565b6001600160a01b038316613c955760405162461bcd60e51b81526004018080602001828103825260258152602001806144a76025913960400191505060405180910390fd5b6001600160a01b038216613cda5760405162461bcd60e51b815260040180806020018281038252602381526020018061423e6023913960400191505060405180910390fd5b6001600160a01b038316600090815260016020526040902054613d03908263ffffffff613ba016565b6001600160a01b038085166000908152600160205260408082209390935590841681522054613d38908263ffffffff61392d16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b814211613dd25760405162461bcd60e51b815260040180806020018281038252602b8152602001806142b6602b913960400191505060405180910390fd5b804210613e105760405162461bcd60e51b81526004018080602001828103825260258152602001806145986025913960400191505060405180910390fd5b613e1a8484613a69565b50505050565b6001600160a01b0382166000818152601160209081526040808320858452909152808220805460ff19166001179055518392917f98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a591a35050565b303b1590565b6004819055604051339082907f3bb5a3ed42af6c70969e54bbe40e4bba09c07f42c120cbec4ac0ee7eb0057fc990600090a350565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115613f165760405162461bcd60e51b81526004018080602001828103825260268152602001806145446026913960400191505060405180910390fd5b8360ff16601b14158015613f2e57508360ff16601c14155b15613f6a5760405162461bcd60e51b81526004018080602001828103825260268152602001806142e16026913960400191505060405180910390fd5b604080516000808252602080830180855289905260ff88168385015260608301879052608083018690529251909260019260a080820193601f1981019281900390910190855afa158015613fc2573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661402a576040805162461bcd60e51b815260206004820152601c60248201527f45435265636f7665723a20696e76616c6964207369676e617475726500000000604482015290519081900360640190fd5b95945050505050565b600081848411156140c25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561408757818101518382015260200161406f565b50505050905090810190601f1680156140b45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008160140183511015614125576040805162461bcd60e51b815260206004820152601b60248201527f72656164416464726573733a206461746120746f6f2073686f72740000000000604482015290519081900360640190fd5b5001601401516001600160a01b031690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106141785782800160ff198235161785556141a5565b828001600101855582156141a5579182015b828111156141a557823582559160200191906001019061418a565b506141b1929150614223565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106141f657805160ff19168380011785556141a5565b828001600101855582156141a5579182015b828111156141a5578251825591602001919060010190614208565b610fe191905b808211156141b1576000815560010161422956fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573737468652073656e646572206973206e6f74207468652061646d696e0000000000696e637265617365416c6c6f77616e636557697468417574686f72697a6174696f6e3a20696e76616c6964207369676e617475726546696174546f6b656e56323a20617574686f72697a6174696f6e206973206e6f74207965742076616c696445435265636f7665723a20696e76616c6964207369676e6174757265202776272076616c756545524332303a20617070726f766520746f20746865207a65726f206164647265737374686973206163636f756e7420697320746865207a65726f20616464726573737468652077697065722063616e206f6e6c7920626520696e69746961746564206f6e636563616e63656c417574686f72697a6174696f6e3a20696e76616c6964207369676e61747572657468697320697320612070617573656420636f6e7472616374000000000000007468652073656e646572206973206e6f7420746865206d696e74657241646d696e496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65647472616e7366657257697468417574686f72697a6174696f6e3a20696e76616c6964207369676e61747572657468697320616d6f756e74206973206e6f742061206e61747572616c206e756d6265726465637265617365416c6c6f77616e636557697468417574686f72697a6174696f6e3a20696e76616c6964207369676e617475726545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f2061646472657373617070726f766557697468417574686f72697a6174696f6e3a20696e76616c6964207369676e617475726545524332303a20617070726f76652066726f6d20746865207a65726f20616464726573737468697320616d6f756e74206973206c657373207468616e2074686520746f74616c79537570706c7945435265636f7665723a20696e76616c6964207369676e6174757265202773272076616c756546696174546f6b656e56323a20617574686f72697a6174696f6e2069732075736564206f722063616e63656c656446696174546f6b656e56323a20617574686f72697a6174696f6e20697320657870697265647468697320616d6f756e74206973206d6f7265207468616e206361706163697479a2646970667358221220db61dda377ec860fe1b85c7101b9674a33f39747ab8607173a3da14773b5142b64736f6c63430006090033",
  "immutableReferences": {},
  "sourceMap": "275:1521:19:-:0;;;138:1:9;112:27;;145:34;;;-1:-1:-1;;;;;;145:34:9;;;;;;112::14;;;-1:-1:-1;;;;;;152:26:14;;;116:38:15;;;;;;;173:33:8;;;;;;;112:34:11;;;;;;;117:39:12;;;;;;;150:33:13;;;;;;;;136::16;;;-1:-1:-1;;;;;;136:33:16;;;275:1521:19;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "275:1521:19:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1138:240:13;;;;;;;;;;;;;;;;-1:-1:-1;1138:240:13;-1:-1:-1;;;;;1138:240:13;;:::i;:::-;;329:18:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;112:34:11;;;:::i;:::-;;;;-1:-1:-1;;;;;112:34:11;;;;;;;;;;;;;;169:169:17;;;:::i;2550:163:3:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2550:163:3;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;849:136:6;;;:::i;:::-;;;;;;;;;;;;;;;;1563:99:3;;;:::i;2461:245:18:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2461:245:18;;;;;;;;;;;;;;;;;:::i;160:43:15:-;;;;;;;;;;;;;;;;-1:-1:-1;160:43:15;-1:-1:-1;;;;;160:43:15;;:::i;399:221:12:-;;;;;;;;;;;;;;;;-1:-1:-1;399:221:12;-1:-1:-1;;;;;399:221:12;;:::i;972:201:8:-;;;;;;;;;;;;;;;;-1:-1:-1;972:201:8;-1:-1:-1;;;;;972:201:8;;:::i;425:210:16:-;;;;;;;;;;;;;;;;-1:-1:-1;425:210:16;-1:-1:-1;;;;;425:210:16;;:::i;685:116:7:-;;;:::i;379:21:18:-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1290:31:2;;;:::i;3835:203:3:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3835:203:3;;;;;;;;:::i;987:252:19:-;;;;;;;;;;;;;;;;-1:-1:-1;987:252:19;-1:-1:-1;;;;;987:252:19;;:::i;690:119:14:-;;;:::i;1961:245:18:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1961:245:18;;;;;;;;:::i;2712:158::-;;;;;;;;;;;;;;;;-1:-1:-1;2712:158:18;;:::i;1542:106:19:-;;;:::i;1448:147:6:-;;;:::i;145:34:9:-;;;:::i;464:135:27:-;;;;;;;;;;;;;;;;-1:-1:-1;464:135:27;-1:-1:-1;;;;;464:135:27;;:::i;9062:653:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;9062:653:6;;;;;;;;;;;;;;;;;;;;;;;;;:::i;152:26:14:-;;;:::i;112:27:9:-;;;:::i;503:436:19:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;503:436:19;-1:-1:-1;;;;;;503:436:19;;;;;;;;;;:::i;957:243:15:-;;;;;;;;;;;;;;;;-1:-1:-1;957:243:15;-1:-1:-1;;;;;957:243:15;;:::i;1720:118:3:-;;;;;;;;;;;;;;;;-1:-1:-1;1720:118:3;-1:-1:-1;;;;;1720:118:3;;:::i;1099:107:7:-;;;;;;;;;;;;;;;;-1:-1:-1;1099:107:7;-1:-1:-1;;;;;1099:107:7;;:::i;565:119:14:-;;;:::i;1670:124:19:-;;;;;;;;;;;;;;;;-1:-1:-1;1670:124:19;-1:-1:-1;;;;;1670:124:19;;:::i;150:33:13:-;;;:::i;936:196::-;;;;;;;;;;;;;;;;-1:-1:-1;936:196:13;-1:-1:-1;;;;;936:196:13;;:::i;731:188:16:-;;;;;;;;;;;;;;;;-1:-1:-1;731:188:16;-1:-1:-1;;;;;731:188:16;;:::i;353:20:18:-;;;:::i;112:34:14:-;;;:::i;566:137:6:-;;;:::i;4525:213:3:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4525:213:3;;;;;;;;:::i;623:210:13:-;;;;;;;;;;;;;;;;-1:-1:-1;623:210:13;-1:-1:-1;;;;;623:210:13;;:::i;117:39:12:-;;;:::i;1245:291:19:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1245:291:19;;;;;;;;:::i;7721:963:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;7721:963:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;653:215:8:-;;;;;;;;;;;;;;;;-1:-1:-1;653:215:8;-1:-1:-1;;;;;653:215:8;;:::i;568:1176:18:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;568:1176:18;;;;;;;;-1:-1:-1;568:1176:18;;-1:-1:-1;;568:1176:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;568:1176:18;;-1:-1:-1;;568:1176:18;;;;;-1:-1:-1;;;;;;;568:1176:18;;;;;;;;;;;;;;-1:-1:-1;568:1176:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;6181:954:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;6181:954:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;708:243:15:-;;;;;;;;;;;;;;;;-1:-1:-1;708:243:15;-1:-1:-1;;;;;708:243:15;;:::i;1136:147:6:-;;;:::i;1179:235:8:-;;;;;;;;;;;;;;;;-1:-1:-1;1179:235:8;-1:-1:-1;;;;;1179:235:8;;:::i;1634:647:7:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1634:647:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1760:130:6:-;;;:::i;136:33:16:-;;;:::i;2270:142:3:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2270:142:3;;;;;;;;;;:::i;116:38:15:-;;;:::i;4773:822:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;4773:822:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;3372:829::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;3372:829:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;2605:195::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2605:195:6;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;173:33:8;;;:::i;1750:205:18:-;;;;;;;;;;;;;;;;-1:-1:-1;1750:205:18;;:::i;1138:240:13:-;562:5;;-1:-1:-1;;;;;562:5:13;548:10;:19;540:59;;;;;-1:-1:-1;;;540:59:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;1231:8:13::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;1265:11:13::3;::::0;;-1:-1:-1;;;;;1286:22:13;;::::3;-1:-1:-1::0;;;;;;1286:22:13;::::3;;::::0;;;;1323:48:::3;::::0;1265:11;;::::3;::::0;1360:10:::3;::::0;1347:11;::::3;::::0;1265;;1323:48:::3;::::0;1251:11:::3;::::0;1323:48:::3;209:1:10;447::14::2;1138:240:13::0;:::o;329:18:18:-;;;;;;;;;;;;;;;-1:-1:-1;;329:18:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;112:34:11:-;;;-1:-1:-1;;;;;112:34:11;;:::o;169:169:17:-;206:14;223:23;:21;:23::i;:::-;206:40;;256:16;275:17;285:6;275:9;:17::i;:::-;256:36;;302:29;308:6;316:8;327:3;316:14;302:5;:29::i;:::-;169:169;;:::o;2550:163:3:-;2633:4;2649:36;2658:10;2670:7;2679:5;2649:8;:36::i;:::-;-1:-1:-1;2702:4:3;2550:163;;;;:::o;849:136:6:-;919:66;849:136;:::o;1563:99:3:-;1643:12;;1563:99;;:::o;2461:245:18:-;401:6:14;;2628:4:18;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;-1:-1:-1;;;;;492:21:15;::::1;;::::0;;;:11:::1;:21;::::0;;;;;2585:7:18;;492:21:15::1;;491:22;483:61;;;::::0;;-1:-1:-1;;;483:61:15;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;483:61:15;;;;;;;;;;;;;::::1;;2610:7:18::2;287::10;283:1;:11;275:59;;;;-1:-1:-1::0;;;275:59:10::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2651:48:18::3;2670:7;2679:10;2691:7;2651:18;:48::i;:::-;2644:55:::0;2461:245;-1:-1:-1;;;;;;2461:245:18:o;160:43:15:-;;;;;;;;;;;;;;;:::o;399:221:12:-;326:11;;-1:-1:-1;;;;;326:11:12;312:10;:25;304:71;;;;-1:-1:-1;;;304:71:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;493:8:12::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;527:6:12::3;::::0;;-1:-1:-1;;;;;543:17:12;;::::3;-1:-1:-1::0;;;;;;543:17:12;::::3;;::::0;;;;575:38:::3;::::0;527:6;;::::3;::::0;602:10:::3;::::0;594:6;::::3;::::0;527;;575:38:::3;::::0;513:11:::3;::::0;575:38:::3;209:1:10;447::14::2;399:221:12::0;:::o;972:201:8:-;592:5;;-1:-1:-1;;;;;592:5:8;578:10;:19;570:59;;;;;-1:-1:-1;;;570:59:8;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;570:59:8;;;;;;;;;;;;;;;1046:8;-1:-1:-1;;;;;140:22:10;::::1;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::1;;::::0;::::1;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::1;;1080:6:8::2;::::0;;-1:-1:-1;;;;;1096:17:8;;::::2;-1:-1:-1::0;;;;;;1096:17:8;::::2;;::::0;;;;1128:38:::2;::::0;1080:6;;::::2;::::0;1155:10:::2;::::0;1147:6;::::2;::::0;1080;;1128:38:::2;::::0;1066:11:::2;::::0;1128:38:::2;209:1:10;639::8::1;972:201:::0;:::o;425:210:16:-;592:5:8;;-1:-1:-1;;;;;592:5:8;578:10;:19;570:59;;;;;-1:-1:-1;;;570:59:8;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;570:59:8;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;512:8:16::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;546:5:16::3;::::0;;-1:-1:-1;;;;;561:16:16;;::::3;546:5;561:16:::0;;::::3;-1:-1:-1::0;;;;;;561:16:16;::::3;;::::0;;;;592:36:::3;::::0;546:5;;;::::3;::::0;::::3;::::0;617:10:::3;::::0;610:5;;::::3;::::0;;::::3;::::0;546;;592:36:::3;::::0;532:11:::3;::::0;592:36:::3;209:1:10;447::14::2;425:210:16::0;:::o;685:116:7:-;735:66;685:116;:::o;379:21:18:-;;;;;;:::o;1290:31:2:-;;;;:::o;3835:203:3:-;3940:10;3915:4;3961:23;;;:11;:23;;;;;;;;-1:-1:-1;;;;;3961:32:3;;;;;;;;;;3915:4;;3931:79;;3952:7;;3961:48;;3998:10;3961:48;:36;:48;:::i;:::-;3931:8;:79::i;987:252:19:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;329:5:16::1;::::0;::::1;::::0;::::1;-1:-1:-1::0;;;;;329:5:16::1;315:10;:19;307:59;;;::::0;;-1:-1:-1;;;307:59:16;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;628:21:15;::::2;;::::0;;;:11:::2;:21;::::0;;;;;1082:8:19;;628:21:15::2;;620:64;;;::::0;;-1:-1:-1;;;620:64:15;;::::2;;::::0;::::2;::::0;::::2;::::0;;;;::::2;::::0;;;;;;;;;;;;;::::2;;1102:16:19::3;1121:19;1131:8;1121:9;:19::i;:::-;1102:38;;1150:25;1156:8;1166;1150:5;:25::i;:::-;1190:42;::::0;;;;;;;-1:-1:-1;;;;;1190:42:19;::::3;::::0;::::3;::::0;;;;;::::3;::::0;;::::3;694:1:15;376::16::2;987:252:19::0;:::o;690:119:14:-;294:6;;-1:-1:-1;;;;;294:6:14;280:10;:20;272:61;;;;;-1:-1:-1;;;272:61:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;501:6:::1;::::0;-1:-1:-1;;;501:6:14;::::1;;;493:48;;;::::0;;-1:-1:-1;;;493:48:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;748:6:::2;:14:::0;;-1:-1:-1;;;;748:14:14::2;::::0;;;;777:25:::2;::::0;;-1:-1:-1;;;783:6:14;;::::2;748:14;783:6;777:25;;::::0;;;791:10:::2;::::0;777:25:::2;::::0;;;;;::::2;::::0;;::::2;690:119::o:0;1961:245:18:-;207:6:11;;-1:-1:-1;;;;;207:6:11;193:10;:20;185:61;;;;;-1:-1:-1;;;185:61:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;2062:26:18::2;2080:7;2062:13;:11;:13::i;:::-;:17:::0;:26:::2;:17;:26;:::i;:::-;447:8:9;;436:7;:19;;428:65;;;;-1:-1:-1::0;;;428:65:9::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2106:7:18::3;287::10;283:1;:11;275:59;;;;-1:-1:-1::0;;;275:59:10::3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2125:24:18::4;2131:8;2141:7;2125:5;:24::i;:::-;2164:35;::::0;;;;;;;2188:10:::4;::::0;-1:-1:-1;;;;;2164:35:18;::::4;::::0;::::4;::::0;;;;::::4;::::0;;::::4;503:1:9::3;447::14::2;1961:245:18::0;;:::o;2712:158::-;2766:7;287::10;283:1;:11;275:59;;;;-1:-1:-1;;;275:59:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2785:26:18::1;2791:10;2803:7;2785:5;:26::i;:::-;2826:37;::::0;;;;;;;2852:10:::1;::::0;;;2826:37:::1;::::0;;;;::::1;::::0;;::::1;2712:158:::0;;:::o;1542:106:19:-;1627:14;;;;;;;;;;;;-1:-1:-1;;;1627:14:19;;;;1542:106;:::o;1448:147:6:-;1529:66;1448:147;:::o;145:34:9:-;;;-1:-1:-1;;;;;145:34:9;;:::o;464:135:27:-;576:16;;-1:-1:-1;;;;;576:16:27;;;563:29;;;;464:135::o;9062:653:6:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;9234:46:6::1;9262:10;9274:5;9234:27;:46::i;:::-;9311:106;::::0;;1824:66:::1;9311:106;::::0;::::1;::::0;-1:-1:-1;;;;;9311:106:6;::::1;::::0;;;;;;9291:17:::1;9311:106:::0;;;;;;;;;;;;;;;;;;;;;;;9463:16:::1;::::0;9311:106;;;9448:47:::1;::::0;9481:1;9484;9487;9311:106;9448:14:::1;:47::i;:::-;-1:-1:-1::0;;;;;9448:61:6::1;;9427:146;;;;-1:-1:-1::0;;;9427:146:6::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;;;;;9584:32:6;::::1;;::::0;;;:20:::1;:32;::::0;;;;;;;:39;;;;;;;;;:69;;-1:-1:-1;;9584:69:6::1;9626:27;9584:69;::::0;;9668:40;9584:39;;:32;9668:40:::1;::::0;::::1;447:1:14;9062:653:6::0;;;;;:::o;152:26:14:-;;;-1:-1:-1;;;152:26:14;;;;;:::o;112:27:9:-;;;;:::o;503:436:19:-;628:14;;-1:-1:-1;;;628:14:19;;;;627:15;606:93;;;;;-1:-1:-1;;;606:93:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;728:15;:4;735:8;;728:15;:::i;:::-;-1:-1:-1;781:5:19;:14;;-1:-1:-1;;;;;;781:14:19;;-1:-1:-1;;;;;781:14:19;;;;;;;;;;;852:4;825:37;;;;;;;-1:-1:-1;825:37:19;;;;;;-1:-1:-1;;825:37:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;852:4;825:37;;852:4;825:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;825:37:19;;;:26;:37::i;:::-;806:16;:56;872:14;:21;;-1:-1:-1;;;;;;;872:21:19;;;;-1:-1:-1;;;;;;903:29:19;-1:-1:-1;;;;;903:29:19;;;;;;;;;;-1:-1:-1;;;503:436:19:o;957:243:15:-;357:10;;-1:-1:-1;;;;;357:10:15;343;:24;335:69;;;;;-1:-1:-1;;;335:69:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;1048:8:15::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;-1:-1:-1::0;;;;;628:21:15;::::3;;::::0;;;:11:::3;:21;::::0;;;;;1073:8;;628:21:::3;;620:64;;;::::0;;-1:-1:-1;;;620:64:15;;::::3;;::::0;::::3;::::0;::::3;::::0;;;;::::3;::::0;;;;;;;;;;;;;::::3;;-1:-1:-1::0;;;;;1093:21:15;::::4;1117:5;1093:21:::0;;;:11:::4;:21;::::0;;;;;;;:29;;-1:-1:-1;;1093:29:15::4;::::0;;1137:56;;;;;;1182:10:::4;::::0;1093:21;1137:56:::4;::::0;;;;;;;::::4;209:1:10::3;447::14::2;957:243:15::0;:::o;1720:118:3:-;-1:-1:-1;;;;;1813:18:3;1787:7;1813:18;;;:9;:18;;;;;;;1720:118::o;1099:107:7:-;-1:-1:-1;;;;;1179:20:7;1153:7;1179:20;;;:13;:20;;;;;;;1099:107::o;565:119:14:-;294:6;;-1:-1:-1;;;;;294:6:14;280:10;:20;272:61;;;;;-1:-1:-1;;;272:61:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;624:6:::2;:13:::0;;-1:-1:-1;;;;624:13:14::2;-1:-1:-1::0;;;624:13:14;;::::2;::::0;;;;652:25:::2;::::0;;658:6;;;::::2;624:13;658:6;652:25;;::::0;;;;666:10:::2;::::0;652:25:::2;::::0;;;;;::::2;::::0;;::::2;565:119::o:0;1670:124:19:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;592:5:8::1;::::0;-1:-1:-1;;;;;592:5:8::1;578:10;:19;570:59;;;::::0;;-1:-1:-1;;;570:59:8;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;570:59:8;;;;;;;;;;;;;::::1;;1759:16:19::2;:28:::0;;-1:-1:-1;;;;;;1759:28:19::2;-1:-1:-1::0;;;;;1759:28:19;;;::::2;::::0;;;::::2;::::0;;1670:124::o;150:33:13:-;;;-1:-1:-1;;;;;150:33:13;;:::o;936:196::-;562:5;;-1:-1:-1;;;;;562:5:13;548:10;:19;540:59;;;;;-1:-1:-1;;;540:59:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;1009:8;-1:-1:-1;;;;;140:22:10;::::1;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::1;;::::0;::::1;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::1;;1043:5:13::2;::::0;;-1:-1:-1;;;;;1058:16:13;;::::2;-1:-1:-1::0;;;;;;1058:16:13;::::2;;::::0;;;;1089:36:::2;::::0;1043:5;;::::2;::::0;1114:10:::2;::::0;1107:5;::::2;::::0;1043;;1089:36:::2;::::0;1029:11:::2;::::0;1089:36:::2;209:1:10;609::13::1;936:196:::0;:::o;731:188:16:-;798:8;-1:-1:-1;;;;;140:22:10;;132:67;;;;;-1:-1:-1;;;132:67:10;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;;;826:5:16::1;::::0;::::1;::::0;::::1;-1:-1:-1::0;;;;;826:5:16::1;:19:::0;818:68:::1;;;;-1:-1:-1::0;;;818:68:16::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1::0;896:5:16::1;:16:::0;;-1:-1:-1;;;;;896:16:16;;::::1;;;-1:-1:-1::0;;;;;;896:16:16;;::::1;::::0;;;::::1;::::0;;731:188::o;353:20:18:-;;;;;;;;;;;;;;;-1:-1:-1;;353:20:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;112:34:14;;;-1:-1:-1;;;;;112:34:14;;:::o;566:137:6:-;637:66;566:137;:::o;4525:213:3:-;4635:10;4610:4;4656:23;;;:11;:23;;;;;;;;-1:-1:-1;;;;;4656:32:3;;;;;;;;;;4610:4;;4626:84;;4647:7;;4656:53;;4693:15;4656:53;:36;:53;:::i;623:210:13:-;562:5;;-1:-1:-1;;;;;562:5:13;548:10;:19;540:59;;;;;-1:-1:-1;;;540:59:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;710:8:13::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;744:5:13::3;::::0;;-1:-1:-1;;;;;759:16:13;;::::3;-1:-1:-1::0;;;;;;759:16:13;::::3;;::::0;;;;790:36:::3;::::0;744:5;;::::3;::::0;815:10:::3;::::0;808:5;::::3;::::0;744;;790:36:::3;::::0;730:11:::3;::::0;790:36:::3;209:1:10;447::14::2;623:210:13::0;:::o;117:39:12:-;;;-1:-1:-1;;;;;117:39:12;;:::o;1245:291:19:-;401:6:14;;1394:4:19;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;1348:10:19::1;492:21:15;::::0;;;:11:::1;:21;::::0;;;;;::::1;;491:22;483:61;;;::::0;;-1:-1:-1;;;483:61:15;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;483:61:15;;;;;;;;;;;;;::::1;;1376:7:19::2;287::10;283:1;:11;275:59;;;;-1:-1:-1::0;;;275:59:10::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:44:19::3;1474:12;:10;:12::i;:::-;1488:10;1500:7;1464:9;:44::i;:::-;-1:-1:-1::0;1525:4:19::3;::::0;1245:291;-1:-1:-1;;;;1245:291:19:o;7721:963:6:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;8012:65:6::1;8039:5;8046;8053:10;8065:11;8012:26;:65::i;:::-;8108:211;::::0;;1529:66:::1;8108:211;::::0;::::1;::::0;-1:-1:-1;;;;;8108:211:6;;::::1;::::0;;;;;;;;::::1;8088:17;8108:211:::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8365:16:::1;::::0;8108:211;;;8350:47:::1;::::0;8383:1;8386;8389;8108:211;8350:14:::1;:47::i;:::-;-1:-1:-1::0;;;;;8350:56:6::1;;8329:156;;;;-1:-1:-1::0;;;8329:156:6::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8496:38;8521:5;8528;8496:24;:38::i;:::-;8611:66;8620:5;8627:7;8636:40;8666:9;8636:25;8646:5;8653:7;8636:9;:25::i;:::-;:29:::0;:40:::1;:29;:40;:::i;8611:66::-;447:1:14;7721:963:6::0;;;;;;;;;:::o;653:215:8:-;592:5;;-1:-1:-1;;;;;592:5:8;578:10;:19;570:59;;;;;-1:-1:-1;;;570:59:8;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;570:59:8;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;741:8:8::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;775:6:8::3;::::0;;-1:-1:-1;;;;;791:17:8;;::::3;-1:-1:-1::0;;;;;;791:17:8;::::3;;::::0;;;;823:38:::3;::::0;775:6;;::::3;::::0;850:10:::3;::::0;842:6;::::3;::::0;775;;823:38:::3;::::0;761:11:::3;::::0;823:38:::3;209:1:10;447::14::2;653:215:8::0;:::o;568:1176:18:-;1426:13:5;;;;;;;;:33;;;1443:16;:14;:16::i;:::-;1426:50;;;-1:-1:-1;1464:12:5;;;;1463:13;1426:50;1418:109;;;;-1:-1:-1;;;1418:109:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1538:19;1561:13;;;;;;1560:14;1584:98;;;;1618:13;:20;;-1:-1:-1;;;;1618:20:5;;;;;1652:19;1634:4;1652:19;;;1584:98;-1:-1:-1;;;;;906:20:18;::::1;898:59;;;::::0;;-1:-1:-1;;;898:59:18;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;979:20:18;::::1;971:59;;;::::0;;-1:-1:-1;;;971:59:18;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;1052:21:18;::::1;1044:61;;;::::0;;-1:-1:-1;;;1044:61:18;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;1127:25:18;::::1;1119:69;;;::::0;;-1:-1:-1;;;1119:69:18;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;1210:21:18;::::1;1202:61;;;::::0;;-1:-1:-1;;;1202:61:18;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;1285:26:18;::::1;1277:71;;;::::0;;-1:-1:-1;;;1277:71:18;;::::1;;::::0;::::1;::::0;;;;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;1370:21:18;::::1;1362:61;;;::::0;;-1:-1:-1;;;1362:61:18;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;1437:12:::0;;::::1;::::0;:4:::1;::::0;:12:::1;::::0;::::1;::::0;::::1;:::i;:::-;-1:-1:-1::0;1463:16:18;;::::1;::::0;:6:::1;::::0;:16:::1;::::0;::::1;::::0;::::1;:::i;:::-;-1:-1:-1::0;1493:8:18::1;:20:::0;;-1:-1:-1;;1493:20:18::1;;::::0;::::1;;::::0;;1527:5:::1;:14:::0;;-1:-1:-1;;;;;;1527:14:18;;::::1;-1:-1:-1::0;;;;;1527:14:18;;::::1;::::0;;;::::1;::::0;;;1555:5:::1;:14:::0;;;::::1;::::0;;::::1;;::::0;;1583:6:::1;:16:::0;;;::::1;::::0;;::::1;;::::0;;-1:-1:-1;1613:24:18;;;::::1;::::0;;::::1;;::::0;;-1:-1:-1;1651:16:18;;;::::1;::::0;;::::1;;::::0;;1681:11:::1;:26:::0;;;::::1;::::0;;::::1;;::::0;;-1:-1:-1;1721:16:18;;;;::::1;::::0;;::::1;::::0;;;::::1;::::0;;1704:66:5;;;;1754:5;1738:21;;-1:-1:-1;;1738:21:5;;;1704:66;568:1176:18;;;;;;;;;;;:::o;6181:954:6:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;6472:65:6::1;6499:5;6506;6513:10;6525:11;6472:26;:65::i;:::-;6568:211;::::0;;1217:66:::1;6568:211;::::0;::::1;::::0;-1:-1:-1;;;;;6568:211:6;;::::1;::::0;;;;;;;;::::1;6548:17;6568:211:::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6825:16:::1;::::0;6568:211;;;6810:47:::1;::::0;6843:1;6846;6849;6568:211;6810:14:::1;:47::i;:::-;-1:-1:-1::0;;;;;6810:56:6::1;;6789:156;;;;-1:-1:-1::0;;;6789:156:6::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6956:38;6981:5;6988;6956:24;:38::i;:::-;7062:66;7071:5;7078:7;7087:40;7117:9;7087:25;7097:5;7104:7;7087:9;:25::i;708:243:15:-:0;357:10;;-1:-1:-1;;;;;357:10:15;343;:24;335:69;;;;;-1:-1:-1;;;335:69:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;797:8:15::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;-1:-1:-1::0;;;;;492:21:15;::::3;;::::0;;;:11:::3;:21;::::0;;;;;825:8;;492:21:::3;;491:22;483:61;;;::::0;;-1:-1:-1;;;483:61:15;;::::3;;::::0;::::3;::::0;::::3;::::0;;;;-1:-1:-1;;;483:61:15;;;;;;;;;;;;;::::3;;-1:-1:-1::0;;;;;845:21:15;::::4;;::::0;;;:11:::4;:21;::::0;;;;;;;;:28;;-1:-1:-1;;845:28:15::4;869:4;845:28;::::0;;;;888:56;;845:28:::4;910:21:::0;;;::::4;888:56;;::::0;;;;933:10:::4;::::0;845:21;888:56:::4;::::0;;;;;;;::::4;209:1:10::3;447::14::2;708:243:15::0;:::o;1136:147:6:-;1217:66;1136:147;:::o;1179:235:8:-;592:5;;-1:-1:-1;;;;;592:5:8;578:10;:19;570:59;;;;;-1:-1:-1;;;570:59:8;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;570:59:8;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;1271:8:8::0;-1:-1:-1;;;;;140:22:10;::::2;132:67;;;::::0;;-1:-1:-1;;;132:67:10;;::::2;;::::0;::::2;::::0;;;;;;;-1:-1:-1;;;;;;;;;;;132:67:10;;;;;;;;;;;;;::::2;;1305:10:8::3;::::0;;-1:-1:-1;;;;;1325:21:8;;::::3;-1:-1:-1::0;;;;;;1325:21:8;::::3;;::::0;;;;1361:46:::3;::::0;1305:10;;::::3;::::0;1396::::3;::::0;1384;::::3;::::0;1305;;1361:46:::3;::::0;1291:11:::3;::::0;1361:46:::3;209:1:10;447::14::2;1179:235:8::0;:::o;1634:647:7:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;1859:3:7::1;1847:8;:15;;1839:58;;;::::0;;-1:-1:-1;;;1839:58:7;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;-1:-1:-1::0;;;;;2040:20:7;;::::1;1952:15;2040:20:::0;;;:13:::1;:20;::::0;;;;;;;;:22;;::::1;::::0;::::1;::::0;;;1928:166;;735:66:::1;1928:166:::0;;::::1;::::0;;;;;;;;;;;;::::1;1908:17;1928:166:::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2140:16:::1;::::0;2125:47:::1;::::0;2158:1;2161;2164;1928:166;2125:14:::1;:47::i;:::-;-1:-1:-1::0;;;;;2125:56:7::1;;2104:128;;;::::0;;-1:-1:-1;;;2104:128:7;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;;;;;;;;;;;;;::::1;;2243:31;2252:5;2259:7;2268:5;2243:8;:31::i;:::-;447:1:14;1634:647:7::0;;;;;;;:::o;1760:130:6:-;1824:66;1760:130;:::o;136:33:16:-;;;;;;-1:-1:-1;;;;;136:33:16;;:::o;2270:142:3:-;-1:-1:-1;;;;;2378:18:3;;;2352:7;2378:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;2270:142::o;116:38:15:-;;;-1:-1:-1;;;;;116:38:15;;:::o;4773:822:6:-;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;5050:65:6::1;5077:5;5084;5091:10;5103:11;5050:26;:65::i;:::-;5146:196;::::0;;919:66:::1;5146:196;::::0;::::1;::::0;-1:-1:-1;;;;;5146:196:6;;::::1;::::0;;;;;;;;::::1;5126:17;5146:196:::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5388:16:::1;::::0;5146:196;;;5373:47:::1;::::0;5406:1;5409;5412;5146:196;5373:14:::1;:47::i;:::-;-1:-1:-1::0;;;;;5373:56:6::1;;5352:146;;;;-1:-1:-1::0;;;5352:146:6::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5509:38;5534:5;5541;5509:24;:38::i;:::-;5557:31;5566:5;5573:7;5582:5;5557:8;:31::i;3372:829::-:0;401:6:14;;-1:-1:-1;;;401:6:14;;;;400:7;392:45;;;;;-1:-1:-1;;;392:45:14;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;;;-1:-1:-1;;;;;492:21:15;::::1;;::::0;;;:11:::1;:21;::::0;;;;;3652:4:6;;492:21:15::1;;491:22;483:61;;;::::0;;-1:-1:-1;;;483:61:15;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;483:61:15;;;;;;;;;;;;;::::1;;3668:64:6::2;3695:4;3701:5;3708:10;3720:11;3668:26;:64::i;:::-;3763:191;::::0;;637:66:::2;3763:191;::::0;::::2;::::0;-1:-1:-1;;;;;3763:191:6;;::::2;::::0;;;;;;;;::::2;3743:17;3763:191:::0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4000:16:::2;::::0;3763:191;;;3985:47:::2;::::0;4018:1;4021;4024;3763:191;3985:14:::2;:47::i;:::-;-1:-1:-1::0;;;;;3985:55:6::2;;3964:146;;;;-1:-1:-1::0;;;3964:146:6::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4121:37;4146:4;4152:5;4121:24;:37::i;:::-;4168:26;4178:4;4184:2;4188:5;4168:9;:26::i;2605:195::-:0;-1:-1:-1;;;;;2754:32:6;;;;2713:18;2754:32;;;:20;:32;;;;;;;;:39;;;;;;;;;;;2605:195::o;173:33:8:-;;;-1:-1:-1;;;;;173:33:8;;:::o;1750:205:18:-;309:6:9;;-1:-1:-1;;;;;309:6:9;295:10;:20;287:61;;;;;-1:-1:-1;;;287:61:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:6:14::1;::::0;-1:-1:-1;;;401:6:14;::::1;;;400:7;392:45;;;::::0;;-1:-1:-1;;;392:45:14;;::::1;;::::0;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;;;;;;;392:45:14;;;;;;;;;;;;;::::1;;1828:7:18::2;287::10;283:1;:11;275:59;;;;-1:-1:-1::0;;;275:59:10::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1872:7:18::3;1855:13;:11;:13::i;:::-;:24;;1847:78;;;;-1:-1:-1::0;;;1847:78:18::3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1935:13;1940:7;1935:4;:13::i;166:583:22:-:0;212:19;339:2;320:8;:21;316:427;;-1:-1:-1;;;651:14:22;647:22;634:36;631:2;627:44;602:83;;;-1:-1:-1;722:10:22;715:17;;5904:302:3;-1:-1:-1;;;;;5979:21:3;;5971:65;;;;;-1:-1:-1;;;5971:65:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;6062:12;;:24;;6079:6;6062:24;:16;:24;:::i;:::-;6047:12;:39;-1:-1:-1;;;;;6117:18:3;;;;;;:9;:18;;;;;;:30;;6140:6;6117:30;:22;:30;:::i;:::-;-1:-1:-1;;;;;6096:18:3;;;;;;:9;:18;;;;;;;;:51;;;;6162:37;;;;;;;6096:18;;;;6162:37;;;;;;;;;;5904:302;;:::o;7250:329::-;-1:-1:-1;;;;;7342:19:3;;7334:68;;;;-1:-1:-1;;;7334:68:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7420:21:3;;7412:68;;;;-1:-1:-1;;;7412:68:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7491:18:3;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:35;;;7541:31;;;;;;;;;;;;;;;;;7250:329;;;:::o;3170:270::-;3277:4;3293:36;3303:6;3311:9;3322:6;3293:9;:36::i;:::-;-1:-1:-1;;;;;3368:19:3;;;;;;:11;:19;;;;;;;;3356:10;3368:31;;;;;;;;;3339:73;;3348:6;;3368:43;;3404:6;3368:43;:35;:43;:::i;3339:73::-;-1:-1:-1;3429:4:3;3170:270;;;;;:::o;867:176:42:-;925:7;956:5;;;979:6;;;;971:46;;;;;-1:-1:-1;;;971:46:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;1035:1;867:176;-1:-1:-1;;;867:176:42:o;6525:300:3:-;-1:-1:-1;;;;;6599:21:3;;6591:67;;;;-1:-1:-1;;;6591:67:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6684:12;;:23;;6701:5;6684:23;:16;:23;:::i;:::-;6669:12;:38;-1:-1:-1;;;;;6738:18:3;;;;;;:9;:18;;;;;;:29;;6761:5;6738:29;:22;:29;:::i;:::-;-1:-1:-1;;;;;6717:18:3;;;;;;:9;:18;;;;;;;;:50;;;;6782:36;;;;;;;6717:18;;6782:36;;;;;;;;;;;6525:300;;:::o;9894:299:6:-;-1:-1:-1;;;;;10030:32:6;;10089:25;10030:32;;;:20;:32;;;;;;;;:39;;;;;;;;;;;:84;;;;;;;;;10009:177;;;;-1:-1:-1;;;10009:177:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2577:434:21;2903:26;;;;;;;;;;2808:135;;;-1:-1:-1;;;2808:135:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2785:168;;;;;2749:7;;2970:34;2785:168;2996:1;2999;3002;2970:17;:34::i;:::-;2963:41;2577:434;-1:-1:-1;;;;;;;2577:434:21:o;1500:692::-;2020:22;;;;;;;2064:25;;;;;;;;;1779:392;;;1811:66;1779:392;;;;;;;;;;;;;;;;;;1705:9;1779:392;;;;2148:4;1779:392;;;;;;;;;;;;;;;;;;;;;;;;1752:433;;;;;;1500:692::o;1307:134:42:-;1365:7;1391:43;1395:1;1398;1391:43;;;;;;;;;;;;;;;;;:3;:43::i;851:520:27:-;913:15;963:2;944:8;:21;;;;:55;;;969:30;988:10;969:18;:30::i;:::-;940:398;;;1270:55;1294:8;;1270:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;1304:8:27;:20;;-1:-1:-1;1270:23:27;;-1:-1:-1;1270:55:27:i;:::-;1247:80;;;;940:398;-1:-1:-1;1354:10:27;851:520;:::o;5212:422:3:-;-1:-1:-1;;;;;5309:20:3;;5301:70;;;;-1:-1:-1;;;5301:70:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5389:23:3;;5381:71;;;;-1:-1:-1;;;5381:71:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5483:17:3;;;;;;:9;:17;;;;;;:29;;5505:6;5483:29;:21;:29;:::i;:::-;-1:-1:-1;;;;;5463:17:3;;;;;;;:9;:17;;;;;;:49;;;;5545:20;;;;;;;:32;;5570:6;5545:32;:24;:32;:::i;:::-;-1:-1:-1;;;;;5522:20:3;;;;;;;:9;:20;;;;;;;;;:55;;;;5592:35;;;;;;;5522:20;;5592:35;;;;;;;;;;;;;5212:422;;;:::o;10519:419:6:-;10719:10;10713:3;:16;10692:106;;;;-1:-1:-1;;;10692:106:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10822:11;10816:3;:17;10808:67;;;;-1:-1:-1;;;10808:67:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10885:46;10913:10;10925:5;10885:27;:46::i;:::-;10519:419;;;;:::o;11109:222::-;-1:-1:-1;;;;;11208:32:6;;;;;;:20;:32;;;;;;;;:39;;;;;;;;;:65;;-1:-1:-1;;11208:65:6;11250:23;11208:65;;;11288:36;11208:39;;:32;11288:36;;;11109:222;;:::o;1866:593:5:-;2302:4;2410:17;2445:7;1866:593;:::o;517:115:9:-;567:8;:18;;;600:25;;614:10;;578:7;;600:25;;;;;517:115;:::o;1871:1556:20:-;1996:7;2931:66;2906:91;;2889:192;;;3022:48;;-1:-1:-1;;;3022:48:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2889:192;3095:1;:7;;3100:2;3095:7;;:18;;;;;3106:1;:7;;3111:2;3106:7;;3095:18;3091:97;;;3129:48;;-1:-1:-1;;;3129:48:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3091:97;3299:26;;;3282:14;3299:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3282:14;;3299:26;;;;;;;-1:-1:-1;;3299:26:20;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3299:26:20;;-1:-1:-1;;3299:26:20;;;-1:-1:-1;;;;;;;3343:20:20;;3335:61;;;;;-1:-1:-1;;;3335:61:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;3414:6;1871:1556;-1:-1:-1;;;;;1871:1556:20:o;1725:187:42:-;1811:7;1846:12;1838:6;;;;1830:29;;;;-1:-1:-1;;;1830:29:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1881:5:42;;;1725:187::o;822:814:38:-;943:14;994:5;1002:2;994:10;982:1;:8;:22;;973:63;;;;;-1:-1:-1;;;973:63:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1538:13:38;1283:2;1538:13;1532:20;-1:-1:-1;;;;;1528:69:38;;822:814::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity 0.6.9;\n\nimport \"./Token_v1.sol\";\nimport \"./Roles/Wiper.sol\";\nimport \"./Util/EIP712.sol\";\nimport \"./MetaTransactions.sol\";\nimport \"./Permit.sol\";\nimport \"./Testmint.sol\";\nimport \"@opengsn/gsn/contracts/BaseRelayRecipient.sol\";\n\ncontract Token_v2 is Token_v1, Wiper, MetaTransactions, Permit, Testmint, BaseRelayRecipient {\n\n    bool private _initializedV2;\n\n    event ProhibitedAddressWiped(address indexed addr, uint256 amount);\n\n    // initialize V2\n    function initializeV2(string calldata _newName, address _wiper, address _forwarder) external {\n        require(\n            !_initializedV2,\n            \"Contract is already initialized\"\n        );\n        //new name\n        name = _newName;\n\n        //initialize wiper\n        wiper = _wiper;\n\n        DOMAIN_SEPARATOR = EIP712.makeDomainSeparator(name, \"2\");\n        _initializedV2 = true;\n\n       trustedForwarder = _forwarder;\n    }\n\n    // wipe balance of prohibited address\n    function wipeProhibitedAddress(address _account) public whenNotPaused onlyWiper onlyProhibited(_account) {\n        uint256 _balance = balanceOf(_account);\n        _burn(_account, _balance);\n        emit ProhibitedAddressWiped(_account, _balance);\n    }\n\n    function transfer(address _recipient, uint256 _amount) public override whenNotPaused onlyNotProhibited(msg.sender) isNaturalNumber(_amount) returns (bool) {\n        //_transfer(msg.sender, _recipient, _amount);\n        _transfer(_msgSender(), _recipient, _amount);\n        return true;\n    }\n\n    function versionRecipient() external override view returns (string memory) {\n        return \"2.0.0\";\n    }\n\n    // not need\n    function SetTrustedForwarder(address forwarder) public whenNotPaused onlyAdmin {\n        trustedForwarder = forwarder;\n    }\n}",
  "sourcePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v2.sol",
  "ast": {
    "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v2.sol",
    "exportedSymbols": {
      "Token_v2": [
        2585
      ]
    },
    "id": 2586,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2436,
        "literals": [
          "solidity",
          "0.6",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:22:19"
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v1.sol",
        "file": "./Token_v1.sol",
        "id": 2437,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2435,
        "src": "56:24:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Wiper.sol",
        "file": "./Roles/Wiper.sol",
        "id": 2438,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2095,
        "src": "81:27:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Util/EIP712.sol",
        "file": "./Util/EIP712.sol",
        "id": 2439,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2735,
        "src": "109:27:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/MetaTransactions.sol",
        "file": "./MetaTransactions.sol",
        "id": 2440,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 1256,
        "src": "137:32:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Permit.sol",
        "file": "./Permit.sol",
        "id": 2441,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 1352,
        "src": "170:22:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Testmint.sol",
        "file": "./Testmint.sol",
        "id": 2442,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2126,
        "src": "193:24:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@opengsn/gsn/contracts/BaseRelayRecipient.sol",
        "file": "@opengsn/gsn/contracts/BaseRelayRecipient.sol",
        "id": 2443,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 3211,
        "src": "218:55:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2444,
              "name": "Token_v1",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2434,
              "src": "296:8:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Token_v1_$2434",
                "typeString": "contract Token_v1"
              }
            },
            "id": 2445,
            "nodeType": "InheritanceSpecifier",
            "src": "296:8:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2446,
              "name": "Wiper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2094,
              "src": "306:5:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Wiper_$2094",
                "typeString": "contract Wiper"
              }
            },
            "id": 2447,
            "nodeType": "InheritanceSpecifier",
            "src": "306:5:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2448,
              "name": "MetaTransactions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1255,
              "src": "313:16:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MetaTransactions_$1255",
                "typeString": "contract MetaTransactions"
              }
            },
            "id": 2449,
            "nodeType": "InheritanceSpecifier",
            "src": "313:16:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2450,
              "name": "Permit",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1351,
              "src": "331:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Permit_$1351",
                "typeString": "contract Permit"
              }
            },
            "id": 2451,
            "nodeType": "InheritanceSpecifier",
            "src": "331:6:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2452,
              "name": "Testmint",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2125,
              "src": "339:8:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Testmint_$2125",
                "typeString": "contract Testmint"
              }
            },
            "id": 2453,
            "nodeType": "InheritanceSpecifier",
            "src": "339:8:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2454,
              "name": "BaseRelayRecipient",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3210,
              "src": "349:18:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BaseRelayRecipient_$3210",
                "typeString": "contract BaseRelayRecipient"
              }
            },
            "id": 2455,
            "nodeType": "InheritanceSpecifier",
            "src": "349:18:19"
          }
        ],
        "contractDependencies": [
          183,
          608,
          686,
          757,
          1255,
          1351,
          1486,
          1548,
          1580,
          1604,
          1664,
          1798,
          1886,
          2011,
          2094,
          2125,
          2434,
          3210,
          5160
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2585,
        "linearizedBaseContracts": [
          2585,
          3210,
          5160,
          2125,
          1351,
          1255,
          183,
          2094,
          2434,
          1798,
          1664,
          1604,
          1486,
          2011,
          1886,
          1548,
          1580,
          608,
          686,
          757
        ],
        "name": "Token_v2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2457,
            "mutability": "mutable",
            "name": "_initializedV2",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 2585,
            "src": "375:27:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 2456,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "375:4:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2463,
            "name": "ProhibitedAddressWiped",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2459,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2463,
                  "src": "438:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2458,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2461,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2463,
                  "src": "460:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2460,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:38:19"
            },
            "src": "409:67:19"
          },
          {
            "body": {
              "id": 2502,
              "nodeType": "Block",
              "src": "596:343:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "627:15:19",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 2473,
                          "name": "_initializedV2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2457,
                          "src": "628:14:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420697320616c726561647920696e697469616c697a6564",
                        "id": 2475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "656:33:19",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_566e2746d0865ffb23ae9e9e128ea1d7be28e50b796808afe3f78ca232091f83",
                          "typeString": "literal_string \"Contract is already initialized\""
                        },
                        "value": "Contract is already initialized"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_566e2746d0865ffb23ae9e9e128ea1d7be28e50b796808afe3f78ca232091f83",
                          "typeString": "literal_string \"Contract is already initialized\""
                        }
                      ],
                      "id": 2472,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "606:7:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "606:93:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2477,
                  "nodeType": "ExpressionStatement",
                  "src": "606:93:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2478,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2138,
                      "src": "728:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2479,
                      "name": "_newName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2465,
                      "src": "735:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_calldata_ptr",
                        "typeString": "string calldata"
                      }
                    },
                    "src": "728:15:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 2481,
                  "nodeType": "ExpressionStatement",
                  "src": "728:15:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2482,
                      "name": "wiper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2022,
                      "src": "781:5:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2483,
                      "name": "_wiper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2467,
                      "src": "789:6:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "781:14:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2485,
                  "nodeType": "ExpressionStatement",
                  "src": "781:14:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2486,
                      "name": "DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 182,
                      "src": "806:16:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 2489,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2138,
                          "src": "852:4:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "32",
                          "id": 2490,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "858:3:19",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5",
                            "typeString": "literal_string \"2\""
                          },
                          "value": "2"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5",
                            "typeString": "literal_string \"2\""
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 2487,
                          "name": "EIP712",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2734,
                          "src": "825:6:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_EIP712_$2734_$",
                            "typeString": "type(library EIP712)"
                          }
                        },
                        "id": 2488,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "makeDomainSeparator",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2695,
                        "src": "825:26:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (string memory,string memory) view returns (bytes32)"
                        }
                      },
                      "id": 2491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "825:37:19",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "806:56:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 2493,
                  "nodeType": "ExpressionStatement",
                  "src": "806:56:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2496,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2494,
                      "name": "_initializedV2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2457,
                      "src": "872:14:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 2495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "889:4:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "872:21:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2497,
                  "nodeType": "ExpressionStatement",
                  "src": "872:21:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2498,
                      "name": "trustedForwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3156,
                      "src": "903:16:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2499,
                      "name": "_forwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2469,
                      "src": "922:10:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "903:29:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2501,
                  "nodeType": "ExpressionStatement",
                  "src": "903:29:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "659f50dc",
            "id": 2503,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initializeV2",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2465,
                  "mutability": "mutable",
                  "name": "_newName",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2503,
                  "src": "525:24:19",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2464,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2467,
                  "mutability": "mutable",
                  "name": "_wiper",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2503,
                  "src": "551:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2466,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "551:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2469,
                  "mutability": "mutable",
                  "name": "_forwarder",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2503,
                  "src": "567:18:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2468,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "524:62:19"
            },
            "returnParameters": {
              "id": 2471,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "596:0:19"
            },
            "scope": 2585,
            "src": "503:436:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2531,
              "nodeType": "Block",
              "src": "1092:147:19",
              "statements": [
                {
                  "assignments": [
                    2516
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2516,
                      "mutability": "mutable",
                      "name": "_balance",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 2531,
                      "src": "1102:16:19",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2515,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1102:7:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2520,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2518,
                        "name": "_account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2505,
                        "src": "1131:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2517,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 229,
                      "src": "1121:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 2519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1121:19:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1102:38:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2522,
                        "name": "_account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2505,
                        "src": "1156:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2523,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2516,
                        "src": "1166:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2521,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 533,
                      "src": "1150:5:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1150:25:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2525,
                  "nodeType": "ExpressionStatement",
                  "src": "1150:25:19"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2527,
                        "name": "_account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2505,
                        "src": "1213:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2528,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2516,
                        "src": "1223:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2526,
                      "name": "ProhibitedAddressWiped",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2463,
                      "src": "1190:22:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:42:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2530,
                  "nodeType": "EmitStatement",
                  "src": "1185:47:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "3b6aa12b",
            "id": 2532,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2508,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2507,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "1043:13:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1043:13:19"
              },
              {
                "arguments": null,
                "id": 2510,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2509,
                  "name": "onlyWiper",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2042,
                  "src": "1057:9:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1057:9:19"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2512,
                    "name": "_account",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2505,
                    "src": "1082:8:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2513,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2511,
                  "name": "onlyProhibited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1948,
                  "src": "1067:14:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1067:24:19"
              }
            ],
            "name": "wipeProhibitedAddress",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2505,
                  "mutability": "mutable",
                  "name": "_account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2532,
                  "src": "1018:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2504,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1017:18:19"
            },
            "returnParameters": {
              "id": 2514,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1092:0:19"
            },
            "scope": 2585,
            "src": "987:252:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              2382
            ],
            "body": {
              "id": 2560,
              "nodeType": "Block",
              "src": "1400:136:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 2552,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            3209
                          ],
                          "referencedDeclaration": 3209,
                          "src": "1474:10:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 2553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1474:12:19",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2554,
                        "name": "_recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2534,
                        "src": "1488:10:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2555,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2536,
                        "src": "1500:7:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2551,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 441,
                      "src": "1464:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1464:44:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2557,
                  "nodeType": "ExpressionStatement",
                  "src": "1464:44:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1525:4:19",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2550,
                  "id": 2559,
                  "nodeType": "Return",
                  "src": "1518:11:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "a9059cbb",
            "id": 2561,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2540,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2539,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "1316:13:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1316:13:19"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 2542,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1348:3:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 2543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1348:10:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 2544,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2541,
                  "name": "onlyNotProhibited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1935,
                  "src": "1330:17:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1330:29:19"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2546,
                    "name": "_amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2536,
                    "src": "1376:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 2547,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2545,
                  "name": "isNaturalNumber",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1579,
                  "src": "1360:15:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1360:24:19"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2538,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1307:8:19"
            },
            "parameters": {
              "id": 2537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2534,
                  "mutability": "mutable",
                  "name": "_recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2561,
                  "src": "1263:18:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2536,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2561,
                  "src": "1283:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1262:37:19"
            },
            "returnParameters": {
              "id": 2550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2549,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2561,
                  "src": "1394:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2548,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1394:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1393:6:19"
            },
            "scope": 2585,
            "src": "1245:291:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              5159
            ],
            "body": {
              "id": 2569,
              "nodeType": "Block",
              "src": "1617:31:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "322e302e30",
                    "id": 2567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1634:7:19",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b4bcb154e38601c389396fa918314da42d4626f13ef6d0ceb07e5f5d26b2fbc3",
                      "typeString": "literal_string \"2.0.0\""
                    },
                    "value": "2.0.0"
                  },
                  "functionReturnParameters": 2566,
                  "id": 2568,
                  "nodeType": "Return",
                  "src": "1627:14:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "486ff0cd",
            "id": 2570,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "versionRecipient",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2563,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1579:8:19"
            },
            "parameters": {
              "id": 2562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1567:2:19"
            },
            "returnParameters": {
              "id": 2566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2565,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2570,
                  "src": "1602:13:19",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2564,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1602:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1601:15:19"
            },
            "scope": 2585,
            "src": "1542:106:19",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2583,
              "nodeType": "Block",
              "src": "1749:45:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2579,
                      "name": "trustedForwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3156,
                      "src": "1759:16:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2580,
                      "name": "forwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2572,
                      "src": "1778:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1759:28:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2582,
                  "nodeType": "ExpressionStatement",
                  "src": "1759:28:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8c2bee80",
            "id": 2584,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2575,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2574,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "1725:13:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1725:13:19"
              },
              {
                "arguments": null,
                "id": 2577,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2576,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1402,
                  "src": "1739:9:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1739:9:19"
              }
            ],
            "name": "SetTrustedForwarder",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2572,
                  "mutability": "mutable",
                  "name": "forwarder",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2584,
                  "src": "1699:17:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1699:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1698:19:19"
            },
            "returnParameters": {
              "id": 2578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1749:0:19"
            },
            "scope": 2585,
            "src": "1670:124:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2586,
        "src": "275:1521:19"
      }
    ],
    "src": "32:1764:19"
  },
  "legacyAST": {
    "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v2.sol",
    "exportedSymbols": {
      "Token_v2": [
        2585
      ]
    },
    "id": 2586,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2436,
        "literals": [
          "solidity",
          "0.6",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:22:19"
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Token_v1.sol",
        "file": "./Token_v1.sol",
        "id": 2437,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2435,
        "src": "56:24:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Roles/Wiper.sol",
        "file": "./Roles/Wiper.sol",
        "id": 2438,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2095,
        "src": "81:27:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Util/EIP712.sol",
        "file": "./Util/EIP712.sol",
        "id": 2439,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2735,
        "src": "109:27:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/MetaTransactions.sol",
        "file": "./MetaTransactions.sol",
        "id": 2440,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 1256,
        "src": "137:32:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Permit.sol",
        "file": "./Permit.sol",
        "id": 2441,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 1352,
        "src": "170:22:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/usr0102794/opengsn/metacoin/contracts/GYEN/Testmint.sol",
        "file": "./Testmint.sol",
        "id": 2442,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 2126,
        "src": "193:24:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@opengsn/gsn/contracts/BaseRelayRecipient.sol",
        "file": "@opengsn/gsn/contracts/BaseRelayRecipient.sol",
        "id": 2443,
        "nodeType": "ImportDirective",
        "scope": 2586,
        "sourceUnit": 3211,
        "src": "218:55:19",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2444,
              "name": "Token_v1",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2434,
              "src": "296:8:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Token_v1_$2434",
                "typeString": "contract Token_v1"
              }
            },
            "id": 2445,
            "nodeType": "InheritanceSpecifier",
            "src": "296:8:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2446,
              "name": "Wiper",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2094,
              "src": "306:5:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Wiper_$2094",
                "typeString": "contract Wiper"
              }
            },
            "id": 2447,
            "nodeType": "InheritanceSpecifier",
            "src": "306:5:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2448,
              "name": "MetaTransactions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1255,
              "src": "313:16:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MetaTransactions_$1255",
                "typeString": "contract MetaTransactions"
              }
            },
            "id": 2449,
            "nodeType": "InheritanceSpecifier",
            "src": "313:16:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2450,
              "name": "Permit",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1351,
              "src": "331:6:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Permit_$1351",
                "typeString": "contract Permit"
              }
            },
            "id": 2451,
            "nodeType": "InheritanceSpecifier",
            "src": "331:6:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2452,
              "name": "Testmint",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2125,
              "src": "339:8:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Testmint_$2125",
                "typeString": "contract Testmint"
              }
            },
            "id": 2453,
            "nodeType": "InheritanceSpecifier",
            "src": "339:8:19"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 2454,
              "name": "BaseRelayRecipient",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3210,
              "src": "349:18:19",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BaseRelayRecipient_$3210",
                "typeString": "contract BaseRelayRecipient"
              }
            },
            "id": 2455,
            "nodeType": "InheritanceSpecifier",
            "src": "349:18:19"
          }
        ],
        "contractDependencies": [
          183,
          608,
          686,
          757,
          1255,
          1351,
          1486,
          1548,
          1580,
          1604,
          1664,
          1798,
          1886,
          2011,
          2094,
          2125,
          2434,
          3210,
          5160
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 2585,
        "linearizedBaseContracts": [
          2585,
          3210,
          5160,
          2125,
          1351,
          1255,
          183,
          2094,
          2434,
          1798,
          1664,
          1604,
          1486,
          2011,
          1886,
          1548,
          1580,
          608,
          686,
          757
        ],
        "name": "Token_v2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 2457,
            "mutability": "mutable",
            "name": "_initializedV2",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 2585,
            "src": "375:27:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 2456,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "375:4:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 2463,
            "name": "ProhibitedAddressWiped",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 2462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2459,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "addr",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2463,
                  "src": "438:20:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2458,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2461,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2463,
                  "src": "460:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2460,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "460:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:38:19"
            },
            "src": "409:67:19"
          },
          {
            "body": {
              "id": 2502,
              "nodeType": "Block",
              "src": "596:343:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2474,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "627:15:19",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 2473,
                          "name": "_initializedV2",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2457,
                          "src": "628:14:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "436f6e747261637420697320616c726561647920696e697469616c697a6564",
                        "id": 2475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "656:33:19",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_566e2746d0865ffb23ae9e9e128ea1d7be28e50b796808afe3f78ca232091f83",
                          "typeString": "literal_string \"Contract is already initialized\""
                        },
                        "value": "Contract is already initialized"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_566e2746d0865ffb23ae9e9e128ea1d7be28e50b796808afe3f78ca232091f83",
                          "typeString": "literal_string \"Contract is already initialized\""
                        }
                      ],
                      "id": 2472,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "606:7:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 2476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "606:93:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2477,
                  "nodeType": "ExpressionStatement",
                  "src": "606:93:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2478,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2138,
                      "src": "728:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2479,
                      "name": "_newName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2465,
                      "src": "735:8:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_calldata_ptr",
                        "typeString": "string calldata"
                      }
                    },
                    "src": "728:15:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 2481,
                  "nodeType": "ExpressionStatement",
                  "src": "728:15:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2484,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2482,
                      "name": "wiper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2022,
                      "src": "781:5:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2483,
                      "name": "_wiper",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2467,
                      "src": "789:6:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "781:14:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2485,
                  "nodeType": "ExpressionStatement",
                  "src": "781:14:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2486,
                      "name": "DOMAIN_SEPARATOR",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 182,
                      "src": "806:16:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 2489,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2138,
                          "src": "852:4:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "32",
                          "id": 2490,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "858:3:19",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_ad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5",
                            "typeString": "literal_string \"2\""
                          },
                          "value": "2"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_ad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5",
                            "typeString": "literal_string \"2\""
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 2487,
                          "name": "EIP712",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2734,
                          "src": "825:6:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_EIP712_$2734_$",
                            "typeString": "type(library EIP712)"
                          }
                        },
                        "id": 2488,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "makeDomainSeparator",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2695,
                        "src": "825:26:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (string memory,string memory) view returns (bytes32)"
                        }
                      },
                      "id": 2491,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "825:37:19",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "806:56:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 2493,
                  "nodeType": "ExpressionStatement",
                  "src": "806:56:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2496,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2494,
                      "name": "_initializedV2",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2457,
                      "src": "872:14:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 2495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "889:4:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "872:21:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2497,
                  "nodeType": "ExpressionStatement",
                  "src": "872:21:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2498,
                      "name": "trustedForwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3156,
                      "src": "903:16:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2499,
                      "name": "_forwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2469,
                      "src": "922:10:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "903:29:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2501,
                  "nodeType": "ExpressionStatement",
                  "src": "903:29:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "659f50dc",
            "id": 2503,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initializeV2",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2465,
                  "mutability": "mutable",
                  "name": "_newName",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2503,
                  "src": "525:24:19",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2464,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2467,
                  "mutability": "mutable",
                  "name": "_wiper",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2503,
                  "src": "551:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2466,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "551:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2469,
                  "mutability": "mutable",
                  "name": "_forwarder",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2503,
                  "src": "567:18:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2468,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "524:62:19"
            },
            "returnParameters": {
              "id": 2471,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "596:0:19"
            },
            "scope": 2585,
            "src": "503:436:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2531,
              "nodeType": "Block",
              "src": "1092:147:19",
              "statements": [
                {
                  "assignments": [
                    2516
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2516,
                      "mutability": "mutable",
                      "name": "_balance",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 2531,
                      "src": "1102:16:19",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2515,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1102:7:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 2520,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2518,
                        "name": "_account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2505,
                        "src": "1131:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 2517,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 229,
                      "src": "1121:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 2519,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1121:19:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1102:38:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2522,
                        "name": "_account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2505,
                        "src": "1156:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2523,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2516,
                        "src": "1166:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2521,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 533,
                      "src": "1150:5:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1150:25:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2525,
                  "nodeType": "ExpressionStatement",
                  "src": "1150:25:19"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 2527,
                        "name": "_account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2505,
                        "src": "1213:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2528,
                        "name": "_balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2516,
                        "src": "1223:8:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2526,
                      "name": "ProhibitedAddressWiped",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2463,
                      "src": "1190:22:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1190:42:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2530,
                  "nodeType": "EmitStatement",
                  "src": "1185:47:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "3b6aa12b",
            "id": 2532,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2508,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2507,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "1043:13:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1043:13:19"
              },
              {
                "arguments": null,
                "id": 2510,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2509,
                  "name": "onlyWiper",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2042,
                  "src": "1057:9:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1057:9:19"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2512,
                    "name": "_account",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2505,
                    "src": "1082:8:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 2513,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2511,
                  "name": "onlyProhibited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1948,
                  "src": "1067:14:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1067:24:19"
              }
            ],
            "name": "wipeProhibitedAddress",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2505,
                  "mutability": "mutable",
                  "name": "_account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2532,
                  "src": "1018:16:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2504,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1018:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1017:18:19"
            },
            "returnParameters": {
              "id": 2514,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1092:0:19"
            },
            "scope": 2585,
            "src": "987:252:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              2382
            ],
            "body": {
              "id": 2560,
              "nodeType": "Block",
              "src": "1400:136:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 2552,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            3209
                          ],
                          "referencedDeclaration": 3209,
                          "src": "1474:10:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 2553,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1474:12:19",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2554,
                        "name": "_recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2534,
                        "src": "1488:10:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 2555,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2536,
                        "src": "1500:7:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2551,
                      "name": "_transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 441,
                      "src": "1464:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1464:44:19",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2557,
                  "nodeType": "ExpressionStatement",
                  "src": "1464:44:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 2558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1525:4:19",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 2550,
                  "id": 2559,
                  "nodeType": "Return",
                  "src": "1518:11:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "a9059cbb",
            "id": 2561,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2540,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2539,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "1316:13:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1316:13:19"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 2542,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -15,
                      "src": "1348:3:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 2543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1348:10:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  }
                ],
                "id": 2544,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2541,
                  "name": "onlyNotProhibited",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1935,
                  "src": "1330:17:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1330:29:19"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 2546,
                    "name": "_amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2536,
                    "src": "1376:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 2547,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2545,
                  "name": "isNaturalNumber",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1579,
                  "src": "1360:15:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1360:24:19"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2538,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1307:8:19"
            },
            "parameters": {
              "id": 2537,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2534,
                  "mutability": "mutable",
                  "name": "_recipient",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2561,
                  "src": "1263:18:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2536,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2561,
                  "src": "1283:15:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2535,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1262:37:19"
            },
            "returnParameters": {
              "id": 2550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2549,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2561,
                  "src": "1394:4:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2548,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1394:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1393:6:19"
            },
            "scope": 2585,
            "src": "1245:291:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              5159
            ],
            "body": {
              "id": 2569,
              "nodeType": "Block",
              "src": "1617:31:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "322e302e30",
                    "id": 2567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1634:7:19",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_b4bcb154e38601c389396fa918314da42d4626f13ef6d0ceb07e5f5d26b2fbc3",
                      "typeString": "literal_string \"2.0.0\""
                    },
                    "value": "2.0.0"
                  },
                  "functionReturnParameters": 2566,
                  "id": 2568,
                  "nodeType": "Return",
                  "src": "1627:14:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "486ff0cd",
            "id": 2570,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "versionRecipient",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2563,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1579:8:19"
            },
            "parameters": {
              "id": 2562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1567:2:19"
            },
            "returnParameters": {
              "id": 2566,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2565,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2570,
                  "src": "1602:13:19",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2564,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1602:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1601:15:19"
            },
            "scope": 2585,
            "src": "1542:106:19",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 2583,
              "nodeType": "Block",
              "src": "1749:45:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 2581,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 2579,
                      "name": "trustedForwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3156,
                      "src": "1759:16:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 2580,
                      "name": "forwarder",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2572,
                      "src": "1778:9:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1759:28:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2582,
                  "nodeType": "ExpressionStatement",
                  "src": "1759:28:19"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8c2bee80",
            "id": 2584,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 2575,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2574,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1840,
                  "src": "1725:13:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1725:13:19"
              },
              {
                "arguments": null,
                "id": 2577,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 2576,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1402,
                  "src": "1739:9:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1739:9:19"
              }
            ],
            "name": "SetTrustedForwarder",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 2573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2572,
                  "mutability": "mutable",
                  "name": "forwarder",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 2584,
                  "src": "1699:17:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1699:7:19",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1698:19:19"
            },
            "returnParameters": {
              "id": 2578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1749:0:19"
            },
            "scope": 2585,
            "src": "1670:124:19",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2586,
        "src": "275:1521:19"
      }
    ],
    "src": "32:1764:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.9+commit.3e3065ac.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {
        "0x4eb572e99196bed0270fbd5b17a948e19c3f50a97838cb0d2a75a823ff8e6c50": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldAdmin",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newAdmin",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "AdminChanged",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d81": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "authorizer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "nonce",
              "type": "bytes32"
            }
          ],
          "name": "AuthorizationCanceled",
          "type": "event"
        },
        "0x98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "authorizer",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "nonce",
              "type": "bytes32"
            }
          ],
          "name": "AuthorizationUsed",
          "type": "event"
        },
        "0xdbdf9b8e4b75e75b162d151ec8fc7f0561cabab5fcccfa2600be62223e4300c4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "burnee",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Burn",
          "type": "event"
        },
        "0x3bb5a3ed42af6c70969e54bbe40e4bba09c07f42c120cbec4ac0ee7eb0057fc9": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "newCapacity",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Cap",
          "type": "event"
        },
        "0xc4d5c17597bd0c5594a7545f36de213c6a58e2f235b165887331fe3686181970": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldCapper",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newCapper",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "CapperChanged",
          "type": "event"
        },
        "0xbcad3d7d3dfccb90d49c6063bf70f828901fefc88937d90af74e58e6e55bc39d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "mintee",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Mint",
          "type": "event"
        },
        "0x4a85a5117c27071f301f0a758ea45cef77712d3d8358f0883b21c46ee1693d67": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldMinterAdmin",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newMinterAdmin",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "MinterAdminChanged",
          "type": "event"
        },
        "0x6970e71b2bda096f4eb3290c554af7a888cca0ef8b95da09c55b23c6bb30e381": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldMinter",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newMinter",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "MinterChanged",
          "type": "event"
        },
        "0x381c0d11398486654573703c51ee8210ce9461764d133f9f0e53b6a539705331": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "OwnerChanged",
          "type": "event"
        },
        "0x5a9dfee0981174e5203ccf9368a8cabb254f9dea6ca43f96b4bbd10c69415d8a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Pause",
          "type": "event"
        },
        "0x8b1ee37fa817a066fe12c7c9bf109c0c9f8f03ef0a5cfe0c03d5196e8c2e4657": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldPauser",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newPauser",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "PauserChanged",
          "type": "event"
        },
        "0x0c33c145e6d9d2a0b65f5f10329f8667d6538b98b55d7895abec66e917019a54": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "ProhibitedAddressWiped",
          "type": "event"
        },
        "0x85ae865187b1d7c0069f5fab638cbfcb8f3f9d23bc090e1084abc0dc42def0d2": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldProhibiter",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newProhibiter",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "ProhibiterChanged",
          "type": "event"
        },
        "0xab0ab2fa6ff81b10c5afab4726a665d4379f2d0acaaafbe4c4d737ade05a8e46": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "prohibited",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "status",
              "type": "bool"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "Prohibition",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0xd8d09cf07cabd1c0519931ab387ce1b6e580584a26fb2787b8ed7f446c34603f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "oldWiper",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newWiper",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "WiperChanged",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x72AE2116feEEaE4487e65110a2a7d8DaD7bFf993",
      "transactionHash": "0x00775acb8f6c1123e6f5aab4685fc99db17d64e5a0a8af1929c499ac0848ad80"
    }
  },
  "schemaVersion": "3.2.5",
  "updatedAt": "2020-10-03T12:00:41.551Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See `IERC20.allowance`."
      },
      "approve(address,uint256)": {
        "details": "See `IERC20.approve`. Requirements: - `spender` cannot be the zero address."
      },
      "approveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "params": {
          "nonce": "Unique nonce",
          "owner": "Token owner's address (Authorizer)",
          "r": "r of the signature",
          "s": "s of the signature",
          "spender": "Spender's address",
          "v": "v of the signature",
          "validAfter": "The time after which this is valid (unix time)",
          "validBefore": "The time before which this is valid (unix time)",
          "value": "Amount of allowance"
        }
      },
      "authorizationState(address,bytes32)": {
        "params": {
          "authorizer": "Authorizer's address",
          "nonce": "Nonce of the authorization"
        },
        "returns": {
          "_0": "Authorization state"
        }
      },
      "balanceOf(address)": {
        "details": "See `IERC20.balanceOf`."
      },
      "cancelAuthorization(address,bytes32,uint8,bytes32,bytes32)": {
        "details": "Works only if the authorization is not yet used.",
        "params": {
          "authorizer": "Authorizer's address",
          "nonce": "Nonce of the authorization",
          "r": "r of the signature",
          "s": "s of the signature",
          "v": "v of the signature"
        }
      },
      "changeAdmin(address)": {
        "details": "\"whenNotPaused\" modifier should not be used here"
      },
      "changePauser(address)": {
        "details": "\"whenNotPaused\" modifier should not be used here"
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`. Emits an `Approval` event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "decreaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "params": {
          "decrement": "Amount of decrease in allowance",
          "nonce": "Unique nonce",
          "owner": "Token owner's address (Authorizer)",
          "r": "r of the signature",
          "s": "s of the signature",
          "spender": "Spender's address",
          "v": "v of the signature",
          "validAfter": "The time after which this is valid (unix time)",
          "validBefore": "The time before which this is valid (unix time)"
        }
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`. Emits an `Approval` event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "increaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "params": {
          "increment": "Amount of increase in allowance",
          "nonce": "Unique nonce",
          "owner": "Token owner's address (Authorizer)",
          "r": "r of the signature",
          "s": "s of the signature",
          "spender": "Spender's address",
          "v": "v of the signature",
          "validAfter": "The time after which this is valid (unix time)",
          "validBefore": "The time before which this is valid (unix time)"
        }
      },
      "nonces(address)": {
        "params": {
          "owner": "Token owner's address (Authorizer)"
        },
        "returns": {
          "_0": "Next nonce"
        }
      },
      "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
        "params": {
          "deadline": "Expiration time, seconds since the epoch",
          "owner": "Token owner's address (Authorizer)",
          "r": "r of the signature",
          "s": "s of the signature",
          "spender": "Spender's address",
          "v": "v of the signature",
          "value": "Amount of allowance"
        }
      },
      "totalSupply()": {
        "details": "See `IERC20.totalSupply`."
      },
      "transferWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "params": {
          "from": "Payer's address (Authorizer)",
          "nonce": "Unique nonce",
          "r": "r of the signature",
          "s": "s of the signature",
          "to": "Payee's address",
          "v": "v of the signature",
          "validAfter": "The time after which this is valid (unix time)",
          "validBefore": "The time before which this is valid (unix time)",
          "value": "Amount to be transferred"
        }
      }
    }
  },
  "userdoc": {
    "methods": {
      "approveWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "notice": "Update allowance with a signed authorization"
      },
      "authorizationState(address,bytes32)": {
        "notice": "Returns the state of an authorization"
      },
      "cancelAuthorization(address,bytes32,uint8,bytes32,bytes32)": {
        "notice": "Attempt to cancel an authorization"
      },
      "changeAdmin(address)": {
        "notice": "Change Admin"
      },
      "changePauser(address)": {
        "notice": "Change Pauser"
      },
      "decreaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "notice": "Decrease allowance with a signed authorization"
      },
      "increaseAllowanceWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "notice": "Increase allowance with a signed authorization"
      },
      "nonces(address)": {
        "notice": "Nonces for permit"
      },
      "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
        "notice": "Update allowance with a signed permit"
      },
      "transferWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)": {
        "notice": "Execute a transfer with a signed authorization"
      }
    }
  }
};
