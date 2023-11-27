import { Mcs as McsService } from "../services";

export class Mcs {
  static async getMcs(req, res) {
    const mcs = await McsService.fetchAllMcs(res);
    res.send(mcs);
  }
}
