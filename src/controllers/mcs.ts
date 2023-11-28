import { Request, Response, NextFunction } from "express";
import { Mcs as McsService } from "../services";

export class Mcs {
  static async getMcs(req: Request, res: Response, next: NextFunction) {
    try {
      const mcs = await McsService.fetchAllMcs();
      res.send(mcs);
    } catch (err) {
      next(err);
    }
  }

  static async createMc(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("🚀 ~ file: mcs.ts:17  req:", req);
      const { body } = req;

      const mc = await McsService.createMc(body);
      res.send(mc);
    } catch (err) {
      next(err);
    }
  }
}
