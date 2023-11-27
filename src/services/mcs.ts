import { customModel as McModel } from "../models";

export class Mcs {
  static async fetchAllMcs(query) {
    const mcs = await McModel.find(query);
    return mcs;
  }
}
