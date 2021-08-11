import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import FoodDAO from "./dao/foodDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.FOOD_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParse: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await FoodDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
