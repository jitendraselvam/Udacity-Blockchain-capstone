# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Installation

 1. `cd eth-contract`
 2. `nmp install`
 3. `npm install truffle-hdwallet-provider`

 # Deployed Contracts Address on Rinkeby Network

| Contract Name | Contract Address |
| ------------- | ------------- |
| Verifier | [0xf402e76eF9c30c9793FB75F3d2E68974c73990F6](https://rinkeby.etherscan.io/address/0xf402e76eF9c30c9793FB75F3d2E68974c73990F6) |
| SolnSquareVerifier | [0x6fb830Ba2c43072d76F8FCbf4FA41AAc887F04f7](https://rinkeby.etherscan.io/address/0x6fb830Ba2c43072d76F8FCbf4FA41AAc887F04f7) |
| Migrations | [0xBD09dc81ceB2C6f6552De573b03bf454B2916Cbe](https://rinkeby.etherscan.io/address/0xBD09dc81ceB2C6f6552De573b03bf454B2916Cbe) |

## Logs
```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x80cff46ba5c043286817d4db334181e326964afeead1adbb0083755483351562
   ⠏ Blocks: 0            Seconds: 0undefined
   ⠼ Blocks: 0            Seconds: 4undefined
   > Blocks: 0            Seconds: 8
   > contract address:    0xBD09dc81ceB2C6f6552De573b03bf454B2916Cbe
   > block number:        10361482
   > block timestamp:     1647811193
   > account:             0x0D404BA17AA4ac680b630aEd505B54Bdf8C9CC4C
   > balance:             6.866747558868237416
   > gas used:            226537 (0x374e9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00226537 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x9ea4dbb067b387cbfe5d4f8a90e4d923eab85b06767dc0000a2f07ca399d2ae8
   ⠹ Blocks: 0            Seconds: 0undefined
   ⠧ Blocks: 0            Seconds: 4undefined
   ⠹ Blocks: 0            Seconds: 8undefined
   > Blocks: 0            Seconds: 12
   > contract address:    0xf402e76eF9c30c9793FB75F3d2E68974c73990F6
   > block number:        10361484
   > account:             0x0D404BA17AA4ac680b630aEd505B54Bdf8C9CC4C
   > balance:             6.856613738868237416
   > gas used:            967619 (0xec3c3)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967619 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   ⠋ Blocks: 0            Seconds: 0   > transaction hash:    0x3d69de7c4c46745fa2b9e589299df5d2a1746f1e9f1c8c2ce3445fc1258632fb
   ⠙ Blocks: 0            Seconds: 0undefined
   ⠧ Blocks: 0            Seconds: 4undefined
   > Blocks: 0            Seconds: 8
   > contract address:    0x6fb830Ba2c43072d76F8FCbf4FA41AAc887F04f7
   > block number:        10361485
   > block timestamp:     1647811238
   > account:             0x0D404BA17AA4ac680b630aEd505B54Bdf8C9CC4C
   > balance:             6.817327558868237416
   > gas used:            3928618 (0x3bf22a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03928618 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04896237 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.05122774 ETH
```


# Versions
- Truffle v5.4.33 (core: 5.4.33)
- Ganache v7.0.1
- Solidity - ^0.5.8 (solc-js)
- Node v10.12.0
- Web3.js v1.5.3

# OpenSea link's
 * OpeanSea Collections page: https://testnets.opensea.io/collection/unidentified-contract-ges97ol2tz
 * OpeanSea Item page: https://testnets.opensea.io/assets/0x6fb830ba2c43072d76f8fcbf4fa41aac887f04f7/5

 # Contract ABI's

 ```
 [ { constant: true,
    inputs: [ [Object] ],
    name: 'supportsInterface',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'getApproved',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'approve',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'getSymbol',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'setPaused',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'getName',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'transferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: '__callback',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [ [Object], [Object] ],
    name: 'tokenOfOwnerByIndex',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: '__callback',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'tokenByIndex',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object], [Object] ],
    name: 'verifyTx',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'ownerOf',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'balanceOf',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'getOwner',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'setApprovalForAll',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object], [Object] ],
    name: 'safeTransferFrom',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'getBaseTokenURI',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'tokenURI',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: true,
    inputs: [ [Object], [Object] ],
    name: 'isApprovedForAll',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'SolutionAdded',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Transfer',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Approval',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'ApprovalForAll',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object] ],
    name: 'Paused',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object] ],
    name: 'Unpaused',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'ownershipTransferred',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object] ],
    name: 'Verified',
    type: 'event' },
  { constant: false,
    inputs:
     [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    name: 'addSolution',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'mint',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' } ]
 ```

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
