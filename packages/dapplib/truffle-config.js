require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot eight rice sad misery install office army genuine'; 
let testAccounts = [
"0x5e026e2b38275c1f94df92d03cda447cd1cca0ca93e014fe067105bb6d899f3f",
"0xf7208b09ff232eb00398c871227c1df518669bd03b99c1b6e78a15b3b2980e0b",
"0xebeb73b98944203fd35bc57562d88881681fc3c984179e1b6e008aefe90975b3",
"0x4f4e5c9bd44190ffcde0915188c5340c2b9f9abbba46b06a46ca3041edacf068",
"0xd253ac255326cb51e424623d73a2a49b542b75111c5ac6068997da41c7d62178",
"0x0cdc66591cd51840542d0eacc989f4a73ce5799db94c5feaef7137f3a3c0435c",
"0xb70183cc9561210f121cf79dc0bbeef47b01ec33ee40b14511390d16eb756b81",
"0xabf4a5127987855645836c74abf6460031f736cf5b8443d52faa504a5a663d33",
"0x12f53f0e206127d50d3904766e4d53bb713a335b12763f83d96bd7eb9b9a31f8",
"0x8b7c3bef47dfc72b115a91dd8b22772743a5a8f953bac20c897ca9cd616ea2b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


