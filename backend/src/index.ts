import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
