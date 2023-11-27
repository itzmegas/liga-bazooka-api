import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

import { options } from "./swagger";

import * as path from "path"; // Add this import
import { Routes } from "./routes";

const app = express();
app.disable("x-powered-by");
app.use(cors());

const env = dotenv.config();
dotenvExpand.expand(env);

const PORT = process.env.PORT || 8080;

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

Routes(app);

app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
