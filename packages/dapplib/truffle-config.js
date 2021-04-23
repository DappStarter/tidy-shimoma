require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle foot custom cruise remember unit gentle light army gift'; 
let testAccounts = [
"0x78556cff5d4d84edf432e3c4cc9122d52fe21ab5cfa589568933b8100dcb6a80",
"0x2cb9a4a04cd1c3a7b3cfdbe0fe559cfb31a323d6244d360bdbba4732a1ce06f1",
"0x715775622d73f1b2290ae0fd3088910d996d8e6158852e2924495b684dc7a7e8",
"0xfbe223fd4e51d10599b87add134365cff4411e2908f42dcce7dacdae3712cd4d",
"0x7d5d2a6e423d8cd7aad4aee7496f1ea9d653fba18dd0dd1cddea4c937ecd4d70",
"0xa5c205c09a2a2c0eb8d9e4ac6a4edf559bde1dd95ae3d6086622c5dabccbad6f",
"0x80823fadd5b00c7155dc9710545f1976c3916c71d6a88dc31edded609f2f0bbf",
"0x2676c62efc478dcbcb5c6e996576ec8c77bcbd8506b6d5d50aa05126d026c1b6",
"0x2c38735f5168fa2622e5d10b4e903d35ed32ef977ce6e90cd0b1a4a13ffc0cbc",
"0x8328fc04e69886da2e8e4e7c002f3345748168ca78b786595729da0b61605911"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
