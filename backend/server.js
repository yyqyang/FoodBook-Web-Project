import express from "express"
import cors from "cors"
import foodbook from "./api/foodbook.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v2/foodbook", foodbook)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app