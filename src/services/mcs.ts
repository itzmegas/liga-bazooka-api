import { customModel as McModel } from "../models";

export class Mcs {
  static async fetchAllMcs() {
    const mcs = await McModel.find().lean().exec();
    return mcs;
  }
}
