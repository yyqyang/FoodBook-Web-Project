import express from "express";
import UsersCtrl from "./users.controller.js";
import RecordsCtrl from "./records.controller.js";

const router = express.Router();

router
.route("/")
.get(UsersCtrl.apiGetUser)
.delete(UsersCtrl.apiDeleteUser)
.post(UsersCtrl.apiPostUser)

router
  .route("/record")
  .get(RecordsCtrl.apiGetRecord)
  .post(RecordsCtrl.apiPostRecord)
  .put(RecordsCtrl.apiUpdateRecord)
  .delete(RecordsCtrl.apiDeleteRecord)

export default router;
