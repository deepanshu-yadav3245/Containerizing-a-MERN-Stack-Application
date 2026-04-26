import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || "0.0.0.0";
const app = express();

app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => res.status(200).send("ok"));
app.use("/record", records);

// start the Express server
app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
