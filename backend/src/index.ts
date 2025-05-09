import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import transactionRouter from "./routes/transactionRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: ["https://financas-faceis.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FinançasFáceis API",
      version: "1.0.0",
      description: "Documentação da API do FinançasFáceis",
    },
    servers: [
      {
        url: "https://financasfaceis.onrender.com/api",
        description: "Servidor de produção",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
