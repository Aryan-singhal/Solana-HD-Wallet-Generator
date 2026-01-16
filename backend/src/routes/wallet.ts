import { Router } from "express";
import { GenerateMnemonic, GenerateKeyPair } from "../services/wallet.services";
// import GenerateKeyPair from "../services/wallet.services";

const router = Router();

// Generate mnemonic (backend-safe)
router.get("/mnemonic", GenerateMnemonic);
router.post("/publickey", GenerateKeyPair);

export default router;
