import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
