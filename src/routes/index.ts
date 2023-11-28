import { Router, type Express } from "express";
import { router as RouterApi } from "./api";
import { API_ROUTE } from "../constants";

export const Routes = (app: Express) => {
  app.use("/api", RouterApi(Router()));
};
