import express from "express"
import foodCtrl from "./food.controller.js"

const router = express.Router()

router.route("/").get(foodCtrl.apiGetFood)

export default router