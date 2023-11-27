import { Mcs as McsController } from "../../controllers";

export const router = (router) => {
  router.route("/").get(McsController.getMcs);
  /*  .put(AssignmentController.saveAssignment)
        .delete(AssignmentController.deleteAssignment); */

  return router;
};
