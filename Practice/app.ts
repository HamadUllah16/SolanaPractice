import { Keypair, Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const keyPair = Keypair.generate();

const connection = new Connection(clusterApiUrl("devnet"));
const publicKey = keyPair.publicKey;
console.log("Public Key: ", typeof (publicKey));



async function checkBalance(publicKey) {
    let balance: any;
    try {
        balance = await connection.getBalance(publicKey);
        console.log(balance / LAMPORTS_PER_SOL)
    } catch (error) {
        console.log(error);
    }
}

checkBalance(new PublicKey("CCm7tURv1SAhKjhuYjwf1vDXNwGA3LtLUu9JocEP3mXZ"));
