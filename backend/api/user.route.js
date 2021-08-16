import express from "express";
import userCtrl from "./user.controller.js";

const router = express.Router();

router
  .route("/")
  .get(userCtrl.apiGetUser)
  .delete(userCtrl.apiDeleteUser);

export default router;
