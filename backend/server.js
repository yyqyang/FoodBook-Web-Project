import express from "express"
import cors from "cors"
import food from "./api/food.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v2/food", food)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app