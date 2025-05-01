import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
