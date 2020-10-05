window.gyen = {
  "contractName": "GYEN",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newImplementation",
          "type": "address"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "implementation",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "changeAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_logic",
          "type": "address"
        },
        {
          "name": "_admin",
          "type": "address"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newAdmin",
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
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"newImplementation\",\"type\":\"address\"}],\"name\":\"upgradeTo\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newImplementation\",\"type\":\"address\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"upgradeToAndCall\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"implementation\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"changeAdmin\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"admin\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_logic\",\"type\":\"address\"},{\"name\":\"_admin\",\"type\":\"address\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"admin()\":{\"return\":\"The address of the proxy admin.\"},\"changeAdmin(address)\":{\"details\":\"Changes the admin of the proxy. Only the current admin can call this function.\",\"params\":{\"newAdmin\":\"Address to transfer proxy administration to.\"}},\"implementation()\":{\"return\":\"The address of the implementation.\"},\"upgradeTo(address)\":{\"details\":\"Upgrade the backing implementation of the proxy. Only the admin can call this function.\",\"params\":{\"newImplementation\":\"Address of the new implementation.\"}},\"upgradeToAndCall(address,bytes)\":{\"details\":\"Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.\",\"params\":{\"data\":\"Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding.\",\"newImplementation\":\"Address of the new implementation.\"}}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/usr0102794/GYEN-v1/contracts-origin-with-node/contracts/GYEN.sol\":\"GYEN\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/usr0102794/GYEN-v1/contracts-origin-with-node/contracts/GYEN.sol\":{\"keccak256\":\"0xfb9214d67cef588f87324968377a911ee2230c4f4fa385644c6b9a8753cfda3e\",\"urls\":[\"bzzr://f9059c2c9aecc0417f8a39b0d763ce98d2778e9137d25207692f7bf22fbd8313\"]},\"@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol\":{\"keccak256\":\"0x10ce81d835a4776c23f72c9abe8f65cd806352034d2fa9ebe7a42868a1ad7b22\",\"urls\":[\"bzzr://18420a3537fd2056a26ac0f25ac1f890de39f96aea8758f97ef3f322f069aeb4\"]},\"@openzeppelin/upgrades/contracts/upgradeability/BaseAdminUpgradeabilityProxy.sol\":{\"keccak256\":\"0xbf8ee1cf63a430a3eb8b39a9145d0d133400b8db06fa9fd33056597f7d8ceb25\",\"urls\":[\"bzzr://f9563fda28096fae1396dce1f6eb5f5afc664677887071076b7e4b0e6d06bd56\"]},\"@openzeppelin/upgrades/contracts/upgradeability/BaseUpgradeabilityProxy.sol\":{\"keccak256\":\"0x1b37f808dc0a45976ad23aa53908c485a74a4d9fbd03066a5ab399c46436e570\",\"urls\":[\"bzzr://c309686ae393a7474d0af3a7237b5ef3c452d9f78756d40caeeaad4caf2c2efb\"]},\"@openzeppelin/upgrades/contracts/upgradeability/Proxy.sol\":{\"keccak256\":\"0xd8074ae5fa7ee6384ca8196a896612fb044bbf4ff4b7336d03cd97845000ac21\",\"urls\":[\"bzzr://a94275c7d409e80fa5cf6f31c8a6b97cf85c231de40585d42ae98bab426562c6\"]},\"@openzeppelin/upgrades/contracts/upgradeability/UpgradeabilityProxy.sol\":{\"keccak256\":\"0xb02c6349ba01df9902857b6058f92b37f13187775cce9da74f6f28410205445b\",\"urls\":[\"bzzr://2a95f00787c16351caad43b25048cc40eff9f140c4b1284fbf502dfd9b708489\"]},\"@openzeppelin/upgrades/contracts/utils/Address.sol\":{\"keccak256\":\"0x7be7f8e4c08bc70ff9815e3f11c569f42aa3c447b5bc61fd75fb5cec97f63a9f\",\"urls\":[\"bzzr://b6a2c355fa7aadb6c25e8691e98abc26d3429afa58eb761af4ab5377eee30709\"]}},\"version\":1}",
  "bytecode": "0x60806040526040516109403803806109408339810180604052606081101561002657600080fd5b815160208301516040840180519294919382019264010000000081111561004c57600080fd5b8201602081018481111561005f57600080fd5b815164010000000081118282018710171561007957600080fd5b5050604080517f656970313936372e70726f78792e696d706c656d656e746174696f6e000000008152905190819003601c0190209093508592508491508390839082906000805160206108e5833981519152600019909101146100d857fe5b6100e78261020960201b60201c565b80511561019f576000826001600160a01b0316826040518082805190602001908083835b6020831061012a5780518252601f19909201916020918201910161010b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461018a576040519150601f19603f3d011682016040523d82523d6000602084013e61018f565b606091505b505090508061019d57600080fd5b505b5050604080517f656970313936372e70726f78792e61646d696e00000000000000000000000000815290519081900360130190206000805160206108c5833981519152600019909101146101ef57fe5b6101fe8261028360201b60201c565b50505050505061029b565b61021c8161029560201b6105461760201c565b610271576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603b815260200180610905603b913960400191505060405180910390fd5b6000805160206108e583398151915255565b6000805160206108c583398151915255565b3b151590565b61061b806102aa6000396000f3fe60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100875780635c60da1b146101075780638f28397014610138578063f851a4401461016b575b610052610180565b005b34801561006057600080fd5b506100526004803603602081101561007757600080fd5b50356001600160a01b031661019a565b6100526004803603604081101561009d57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100c857600080fd5b8201836020820111156100da57600080fd5b803590602001918460018302840111640100000000831117156100fc57600080fd5b5090925090506101d4565b34801561011357600080fd5b5061011c610281565b604080516001600160a01b039092168252519081900360200190f35b34801561014457600080fd5b506100526004803603602081101561015b57600080fd5b50356001600160a01b03166102be565b34801561017757600080fd5b5061011c61037b565b6101886103a6565b610198610193610409565b61042e565b565b6101a2610452565b6001600160a01b0316336001600160a01b031614156101c9576101c481610477565b6101d1565b6101d1610180565b50565b6101dc610452565b6001600160a01b0316336001600160a01b03161415610274576101fe83610477565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d806000811461025b576040519150601f19603f3d011682016040523d82523d6000602084013e610260565b606091505b505090508061026e57600080fd5b5061027c565b61027c610180565b505050565b600061028b610452565b6001600160a01b0316336001600160a01b031614156102b3576102ac610409565b90506102bb565b6102bb610180565b90565b6102c6610452565b6001600160a01b0316336001600160a01b031614156101c9576001600160a01b03811661032757604051600160e51b62461bcd02815260040180806020018281038252603681526020018061057f6036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610350610452565b604080516001600160a01b03928316815291841660208301528051918290030190a16101c4816104b7565b6000610385610452565b6001600160a01b0316336001600160a01b031614156102b3576102ac610452565b6103ae610452565b6001600160a01b0316336001600160a01b0316141561040157604051600160e51b62461bcd02815260040180806020018281038252603281526020018061054d6032913960400191505060405180910390fd5b610198610198565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561044d573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610480816104db565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6104e481610546565b61052257604051600160e51b62461bcd02815260040180806020018281038252603b8152602001806105b5603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b3b15159056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a165627a7a723058200795b4addb1bf565c5fd5c2d15854b56722cf2bd765cc3591a18976ac730ab030029b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc43616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373",
  "deployedBytecode": "0x60806040526004361061004a5760003560e01c80633659cfe6146100545780634f1ef286146100875780635c60da1b146101075780638f28397014610138578063f851a4401461016b575b610052610180565b005b34801561006057600080fd5b506100526004803603602081101561007757600080fd5b50356001600160a01b031661019a565b6100526004803603604081101561009d57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100c857600080fd5b8201836020820111156100da57600080fd5b803590602001918460018302840111640100000000831117156100fc57600080fd5b5090925090506101d4565b34801561011357600080fd5b5061011c610281565b604080516001600160a01b039092168252519081900360200190f35b34801561014457600080fd5b506100526004803603602081101561015b57600080fd5b50356001600160a01b03166102be565b34801561017757600080fd5b5061011c61037b565b6101886103a6565b610198610193610409565b61042e565b565b6101a2610452565b6001600160a01b0316336001600160a01b031614156101c9576101c481610477565b6101d1565b6101d1610180565b50565b6101dc610452565b6001600160a01b0316336001600160a01b03161415610274576101fe83610477565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d806000811461025b576040519150601f19603f3d011682016040523d82523d6000602084013e610260565b606091505b505090508061026e57600080fd5b5061027c565b61027c610180565b505050565b600061028b610452565b6001600160a01b0316336001600160a01b031614156102b3576102ac610409565b90506102bb565b6102bb610180565b90565b6102c6610452565b6001600160a01b0316336001600160a01b031614156101c9576001600160a01b03811661032757604051600160e51b62461bcd02815260040180806020018281038252603681526020018061057f6036913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610350610452565b604080516001600160a01b03928316815291841660208301528051918290030190a16101c4816104b7565b6000610385610452565b6001600160a01b0316336001600160a01b031614156102b3576102ac610452565b6103ae610452565b6001600160a01b0316336001600160a01b0316141561040157604051600160e51b62461bcd02815260040180806020018281038252603281526020018061054d6032913960400191505060405180910390fd5b610198610198565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561044d573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b610480816104db565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6104e481610546565b61052257604051600160e51b62461bcd02815260040180806020018281038252603b8152602001806105b5603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b3b15159056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f787920746f20746865207a65726f206164647265737343616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a165627a7a723058200795b4addb1bf565c5fd5c2d15854b56722cf2bd765cc3591a18976ac730ab030029",
  "sourceMap": "112:181:2:-;;;161:129;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;161:129:2;;;;;;;;;;;;;;;;;;19:11:-1;11:20;;8:2;;;44:1;41;34:12;8:2;62:21;;123:4;114:14;;138:31;;;135:2;;;182:1;179;172:12;135:2;213:10;;261:11;244:29;;285:43;;;282:58;-1:-1;233:115;230:2;;;361:1;358;351:12;230:2;-1:-1;;910:41:19;;;;;;;;;;;;;;;;161:129:2;;-1:-1:-1;265:6:2;;-1:-1:-1;273:6:2;;-1:-1:-1;161:129:2;;265:6;;161:129;;-1:-1:-1;;;;;;;;;;;;;902:54:19;;;871:86;864:94;;;;964:26;983:6;964:18;;;:26;;:::i;:::-;999:12;;:16;996:104;;1026:12;1043:6;-1:-1:-1;;;;;1043:19:19;1063:5;1043:26;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1043:26:19;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;1025:44:19;;;1085:7;1077:16;;;;;;996:104;;-1:-1:-1;;1066:32:15;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;1058:45:15;;;1036:68;1029:76;;;;1111:17;1121:6;1111:9;;;:17;;:::i;:::-;909:224;;;161:129:2;;;112:181;;1528:305:17;1606:57;1645:17;1606:38;;;;;:57;;:::i;:::-;1598:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1792:31:17;1784:45::o;3344:133:16:-;-1:-1:-1;;;;;;;;;;;3445:22:16;3437:36::o;924:616:20:-;1487:20;1525:8;;;924:616::o;112:181:2:-;;;;;;;",
  "deployedSourceMap": "112:181:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;453:11:18;:9;:11::i;:::-;112:181:2;2206:103:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2206:103:16;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2206:103:16;-1:-1:-1;;;;;2206:103:16;;:::i;2826:221::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;2826:221:16;;;;;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;2826:221:16;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2826:221:16;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;-1:-1;2826:221:16;;-1:-1:-1;2826:221:16;-1:-1:-1;2826:221:16;:::i;1526:96::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1526:96:16;;;:::i;:::-;;;;-1:-1:-1;;;;;1526:96:16;;;;;;;;;;;;;;1798:224;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1798:224:16;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1798:224:16;-1:-1:-1;;;;;1798:224:16;;:::i;1384:78::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1384:78:16;;;:::i;1952:90:18:-;1988:15;:13;:15::i;:::-;2009:28;2019:17;:15;:17::i;:::-;2009:9;:28::i;:::-;1952:90::o;2206:103:16:-;1261:8;:6;:8::i;:::-;-1:-1:-1;;;;;1247:22:16;:10;-1:-1:-1;;;;;1247:22:16;;1243:76;;;2275:29;2286:17;2275:10;:29::i;:::-;1243:76;;;1301:11;:9;:11::i;:::-;2206:103;:::o;2826:221::-;1261:8;:6;:8::i;:::-;-1:-1:-1;;;;;1247:22:16;:10;-1:-1:-1;;;;;1247:22:16;;1243:76;;;2931:29;2942:17;2931:10;:29::i;:::-;2967:12;2984:17;-1:-1:-1;;;;;2984:30:16;3015:4;;2984:36;;;;;30:3:-1;22:6;14;1:33;2984:36:16;;45:16:-1;;;-1:-1;2984:36:16;;-1:-1:-1;2984:36:16;;-1:-1:-1;;2984:36:16;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;2966:54:16;;;3034:7;3026:16;;;;;;1279:1;1243:76;;;1301:11;:9;:11::i;:::-;2826:221;;;:::o;1526:96::-;1578:7;1261:8;:6;:8::i;:::-;-1:-1:-1;;;;;1247:22:16;:10;-1:-1:-1;;;;;1247:22:16;;1243:76;;;1600:17;:15;:17::i;:::-;1593:24;;1243:76;;;1301:11;:9;:11::i;:::-;1526:96;:::o;1798:224::-;1261:8;:6;:8::i;:::-;-1:-1:-1;;;;;1247:22:16;:10;-1:-1:-1;;;;;1247:22:16;;1243:76;;;-1:-1:-1;;;;;1868:22:16;;1860:89;;;;-1:-1:-1;;;;;1860:89:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1960:32;1973:8;:6;:8::i;:::-;1960:32;;;-1:-1:-1;;;;;1960:32:16;;;;;;;;;;;;;;;;;;;;;1998:19;2008:8;1998:9;:19::i;1384:78::-;1427:7;1261:8;:6;:8::i;:::-;-1:-1:-1;;;;;1247:22:16;:10;-1:-1:-1;;;;;1247:22:16;;1243:76;;;1449:8;:6;:8::i;3552:157::-;3614:8;:6;:8::i;:::-;-1:-1:-1;;;;;3600:22:16;:10;-1:-1:-1;;;;;3600:22:16;;;3592:85;;;;-1:-1:-1;;;;;3592:85:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3683:21;:19;:21::i;958:156:17:-;778:66;1093:11;;1077:33::o;878:731:18:-;1180:12;1177:1;1174;1161:32;1370:1;1367;1353:12;1350:1;1334:14;1329:3;1316:56;1434:14;1431:1;1428;1413:36;1464:6;1519:36;;;;1582:14;1579:1;1572:25;1519:36;1538:14;1535:1;1528:25;3092:136:16;962:66;3207:11;;3192:32::o;1249:142:17:-;1311:37;1330:17;1311:18;:37::i;:::-;1359:27;;-1:-1:-1;;;;;1359:27:17;;;;;;;;1249:142;:::o;3344:133:16:-;962:66;3445:22;3437:36::o;1528:305:17:-;1606:57;1645:17;1606:38;:57::i;:::-;1598:129;;;;-1:-1:-1;;;;;1598:129:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;778:66;1792:31;1784:45::o;924:616:20:-;1487:20;1525:8;;;924:616::o",
  "source": "pragma solidity 0.5.8;\n\nimport \"@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol\";\n\ncontract GYEN is AdminUpgradeabilityProxy {\n\n    constructor(address _logic, address _admin, bytes memory _data) public payable AdminUpgradeabilityProxy(_logic, _admin, _data) {}\n\n}",
  "sourcePath": "/Users/usr0102794/GYEN-v1/contracts-origin-with-node/contracts/GYEN.sol",
  "ast": {
    "absolutePath": "/Users/usr0102794/GYEN-v1/contracts-origin-with-node/contracts/GYEN.sol",
    "exportedSymbols": {
      "GYEN": [
        233
      ]
    },
    "id": 234,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 214,
        "literals": [
          "solidity",
          "0.5",
          ".8"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:2"
      },
      {
        "absolutePath": "@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
        "file": "@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
        "id": 215,
        "nodeType": "ImportDirective",
        "scope": 234,
        "sourceUnit": 1365,
        "src": "24:86:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 216,
              "name": "AdminUpgradeabilityProxy",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1364,
              "src": "129:24:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AdminUpgradeabilityProxy_$1364",
                "typeString": "contract AdminUpgradeabilityProxy"
              }
            },
            "id": 217,
            "nodeType": "InheritanceSpecifier",
            "src": "129:24:2"
          }
        ],
        "contractDependencies": [
          1364,
          1520,
          1578,
          1616,
          1665
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 233,
        "linearizedBaseContracts": [
          233,
          1364,
          1665,
          1520,
          1578,
          1616
        ],
        "name": "GYEN",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 231,
              "nodeType": "Block",
              "src": "288:2:2",
              "statements": []
            },
            "documentation": null,
            "id": 232,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 226,
                    "name": "_logic",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 219,
                    "src": "265:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 227,
                    "name": "_admin",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 221,
                    "src": "273:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 228,
                    "name": "_data",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 223,
                    "src": "281:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  }
                ],
                "id": 229,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 225,
                  "name": "AdminUpgradeabilityProxy",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1364,
                  "src": "240:24:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_AdminUpgradeabilityProxy_$1364_$",
                    "typeString": "type(contract AdminUpgradeabilityProxy)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "240:47:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 219,
                  "name": "_logic",
                  "nodeType": "VariableDeclaration",
                  "scope": 232,
                  "src": "173:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 218,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "173:7:2",
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
                  "id": 221,
                  "name": "_admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 232,
                  "src": "189:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:7:2",
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
                  "id": 223,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 232,
                  "src": "205:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 222,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "172:52:2"
            },
            "returnParameters": {
              "id": 230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "288:0:2"
            },
            "scope": 233,
            "src": "161:129:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 234,
        "src": "112:181:2"
      }
    ],
    "src": "0:293:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/usr0102794/GYEN-v1/contracts-origin-with-node/contracts/GYEN.sol",
    "exportedSymbols": {
      "GYEN": [
        233
      ]
    },
    "id": 234,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 214,
        "literals": [
          "solidity",
          "0.5",
          ".8"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:2"
      },
      {
        "absolutePath": "@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
        "file": "@openzeppelin/upgrades/contracts/upgradeability/AdminUpgradeabilityProxy.sol",
        "id": 215,
        "nodeType": "ImportDirective",
        "scope": 234,
        "sourceUnit": 1365,
        "src": "24:86:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 216,
              "name": "AdminUpgradeabilityProxy",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1364,
              "src": "129:24:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AdminUpgradeabilityProxy_$1364",
                "typeString": "contract AdminUpgradeabilityProxy"
              }
            },
            "id": 217,
            "nodeType": "InheritanceSpecifier",
            "src": "129:24:2"
          }
        ],
        "contractDependencies": [
          1364,
          1520,
          1578,
          1616,
          1665
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 233,
        "linearizedBaseContracts": [
          233,
          1364,
          1665,
          1520,
          1578,
          1616
        ],
        "name": "GYEN",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 231,
              "nodeType": "Block",
              "src": "288:2:2",
              "statements": []
            },
            "documentation": null,
            "id": 232,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 226,
                    "name": "_logic",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 219,
                    "src": "265:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 227,
                    "name": "_admin",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 221,
                    "src": "273:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 228,
                    "name": "_data",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 223,
                    "src": "281:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  }
                ],
                "id": 229,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 225,
                  "name": "AdminUpgradeabilityProxy",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1364,
                  "src": "240:24:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_AdminUpgradeabilityProxy_$1364_$",
                    "typeString": "type(contract AdminUpgradeabilityProxy)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "240:47:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 224,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 219,
                  "name": "_logic",
                  "nodeType": "VariableDeclaration",
                  "scope": 232,
                  "src": "173:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 218,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "173:7:2",
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
                  "id": 221,
                  "name": "_admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 232,
                  "src": "189:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 220,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:7:2",
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
                  "id": 223,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 232,
                  "src": "205:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 222,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "205:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "172:52:2"
            },
            "returnParameters": {
              "id": 230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "288:0:2"
            },
            "scope": 233,
            "src": "161:129:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 234,
        "src": "112:181:2"
      }
    ],
    "src": "0:293:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.8+commit.23d335f2.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "previousAdmin",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
            }
          ],
          "name": "AdminChanged",
          "type": "event",
          "signature": "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f"
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event",
          "signature": "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"
        }
      },
      "links": {},
      "address": "0xC08512927D12348F6620a698105e1BAac6EcD911",
      "transactionHash": "0xf47f910526fa130c7cb065067168ecb3c94c5cb29d3e64dc9062f1a748de92b3"
    },
    "3": {
      "events": {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "previousAdmin",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
            }
          ],
          "name": "AdminChanged",
          "type": "event",
          "signature": "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f"
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event",
          "signature": "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"
        }
      },
      "links": {},
      "address": "0x89Ebdb14400a13e956A5Be01EE38b8eA0eDd6b6e",
      "transactionHash": "0x2a72af41ba4ae9ef8b47265894a98316bf8534fa77eac72ef33676df92ea5bc1"
    },
    "42": {
      "events": {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "previousAdmin",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
            }
          ],
          "name": "AdminChanged",
          "type": "event",
          "signature": "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f"
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event",
          "signature": "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"
        }
      },
      "links": {},
      "address": "0x0BFa7Ab9F16f7a89323c1f89089d12788e6C22A5",
      "transactionHash": "0x525de2ce73dfe04b20b935c8ecbde469d55d50f60f8a91f7544c2d64d8f36058"
    },
    "1337": {
      "events": {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "previousAdmin",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
            }
          ],
          "name": "AdminChanged",
          "type": "event",
          "signature": "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f"
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event",
          "signature": "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"
        }
      },
      "links": {},
      "address": "0xC610a8346994e159De52DCA9de6d24A525668809",
      "transactionHash": "0x39fc33d876cbe62f94f9b5f1b148c5f27bb0f457b890116745905ef3848cdfb6"
    },
    "5777": {
      "events": {
        "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "previousAdmin",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "newAdmin",
              "type": "address"
            }
          ],
          "name": "AdminChanged",
          "type": "event",
          "signature": "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f"
        },
        "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "implementation",
              "type": "address"
            }
          ],
          "name": "Upgraded",
          "type": "event",
          "signature": "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b"
        }
      },
      "links": {},
      "address": "0xe982E462b094850F12AF94d21D470e21bE9D0E9C",
      "transactionHash": "0x9dd4abb2de21ec5ef56e981729021b4406675bb8b58298fd398549756c7dd0ff"
    }
  },
  "schemaVersion": "3.0.16",
  "updatedAt": "2020-10-03T11:22:00.756Z",
  "devdoc": {
    "methods": {
      "admin()": {
        "return": "The address of the proxy admin."
      },
      "changeAdmin(address)": {
        "details": "Changes the admin of the proxy. Only the current admin can call this function.",
        "params": {
          "newAdmin": "Address to transfer proxy administration to."
        }
      },
      "implementation()": {
        "return": "The address of the implementation."
      },
      "upgradeTo(address)": {
        "details": "Upgrade the backing implementation of the proxy. Only the admin can call this function.",
        "params": {
          "newImplementation": "Address of the new implementation."
        }
      },
      "upgradeToAndCall(address,bytes)": {
        "details": "Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.",
        "params": {
          "data": "Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding.",
          "newImplementation": "Address of the new implementation."
        }
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
};
