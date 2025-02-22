require('dotenv').config();

const { INFURA_TOKEN, MNEMONIC, ETH_HOST, ETH_PORT } = process.env;
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host:  ETH_HOST || '127.0.0.1',
      port: ETH_PORT || 7545,
      network_id: '*',
    },
    skale: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://staging-v2.skalenodes.com/v1/stocky-pleione'),
      networkCheckTimeout: 999999, 
      network_id: '1250011826715177',
    },
    live: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://mainnet.infura.io/${INFURA_TOKEN}`),
      network_id: '1',
    },
    kovan: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://kovan.infura.io/${INFURA_TOKEN}`),
      network_id: '2',
    },
    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://ropsten.infura.io/${INFURA_TOKEN}`),
      network_id: '3',
      gas: 4700000,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/${INFURA_TOKEN}`),
      network_id: '4',
    },
  },
};
