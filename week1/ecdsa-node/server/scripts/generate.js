const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();
console.log(`private key:`, toHex(privateKey));

const publicKey = secp.getPublicKey(privateKey);
console.log(`public key:`, toHex(publicKey));
console.log(`address:`, "0x" + toHex((keccak256(publicKey)).slice(-20)));


/*
private key: ae3911c0a9efdae9ff8fe0a96aad35464cb6d7edc6f26a4fe9c392144516f623   
public key: 049854445f3af734363367a1bf2197e88d6bb31d5b2dbceba942653226594e1531f232acaaad4a755e6ce0aafae124a9cbaed602a64364e4a4490f87f0437c6f7f
address: 0x5a13de997928e0a86dc4f5845123ed8f03c81c44

private key: 0c953527f9ff8a11648015174f5d194affe4f2f49f065381c49bc948873cc254   
public key: 0405264c84cf77f1b638c2197c11e93bc6738d9e5c4f625189d7f6b87dc622aae38b0e9b5bab258c7430f1b89d5cc931f8b10d1c57690394754e67457a9f4dd377
address: 0xb63fef9c20c296f5bdd238b605c069c990072590

private key: 30a8213f6f75dbe18d71cde62a1a5e5a1ecb6e62ebe6846d8b6107ac4e4739d0   
public key: 040c6b74e9da94fa463bb2a625d9149b88b1c311dbee85e88633653ff4b3215c24021c900015d7bf5f0c56793c8d66f17a51b9d6a24b8c7cbd2b26b37dc26bc81c
address: 0xcae3c733521213297360b2d482ae41bb0a7f4a39
*/