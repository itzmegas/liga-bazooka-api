import { Router, type Express } from "express";
import { API_ROUTE } from "../constants";
import { router as RouterApi } from "./api";
import { createRequire } from "module";

export const Routes = (app: Express) => {
  app.use("/api", RouterApi(Router()));
};
