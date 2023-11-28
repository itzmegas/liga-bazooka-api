import { Router } from "express";
import { Mcs as McsController } from "../../controllers";

export const router = (router: Router) => {
  router.route("/").get(McsController.getMcs).post(McsController.createMc);
  /*  .put(AssignmentController.saveAssignment)
        .delete(AssignmentController.deleteAssignment); */

  return router;
};
