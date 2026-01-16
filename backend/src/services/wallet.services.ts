
// import { generateMnemonic } from "bip39";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
// import type { Int32 } from "mongoose";

// let mnemonic: string = "";
// let index: number = 0;
export const GenerateMnemonic = (req: any, res: any) => {
    const mnemonic = generateMnemonic(128); // 12 words
    console.log(mnemonic);
    // index = 0;
    res.json({ mnemonic });
}

export const GenerateKeyPair = (req: any, res: any) => {

    const { mnemonic, index } = req.body;

    const seed = mnemonicToSeedSync(mnemonic);
    // for (let i = 0; i < 4; i++) {
    const path = `m/44'/501'/${index}'/0'`; // This is the derivation path
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
    const privateKey = Buffer.from(secret).toString("hex");
    // console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
    console.log(`Public Key ${index}: ${publicKey}`);
    console.log(`Private Key ${index}: ${privateKey}`);
    // index++;
    res.json({ publicKey, privateKey })

}

// module.exports = { GenerateMnemonic, GenerateKeyPair }