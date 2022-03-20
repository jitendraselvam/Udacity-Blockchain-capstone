const fs = require('fs');
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "spice genius bar twenty oak village explain episode sugar walnut tiny tissue";
const infuraKey = "41321c8fbe5246ababb8464356ce616e";
var mnemonicForMetamask = fs.readFileSync("key.secret").toString().trim();

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 50);
      },
      network_id: '*',
      gas: 9999999
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonicForMetamask, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },
  compilers: {
    solc: {
      version: "^0.5.8"
    }
  }
};