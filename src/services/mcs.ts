import { Types } from "mongoose";
import { IMc } from "../interfaces";
import { customModel as McModel } from "../models";

export class Mcs {
  static async fetchAllMcs() {
    const mcs = await McModel.find().lean().exec();
    return mcs;
  }

  static async createMc(mc: IMc) {
    console.log("🚀 ~ file: mcs.ts:12 ~ Mcs ~ createMc ~ mc:", mc);
    const newMc = await McModel.create({ ...mc, _id: new Types.ObjectId() });
    return newMc;
  }
}
