import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./routes/wallet";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/wallet", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
