import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
let food

export default class FoodDAO{
    static async injectDB(conn) {
        if (food) {
          return
        }
        try {
          food = await conn.db(process.env.RESTREVIEWS_NS).collection("myfood")
        } catch (e) {
          console.error(
            `Unable to establish a collection handle in restaurantsDAO: ${e}`,
          )
        }
    }

    static async getFood({
        filters = null,
        page = 0,
        foodPerPage = 20,
    } = {}) {
        let query
        if (filters) {
          if ("food_name" in filters) {
            query = { "food_name": { $eq: filters["food_name"]} }
          } 
        }

        let cursor
        try {
          cursor = await food
            .find(query)
        } catch (e) {
          console.error(`Unable to issue find command, ${e}`)
          return { foodList: [], totalNumfood: 0 }
        }

        const displayCursor = cursor.limit(foodPerPage).skip(foodPerPage * page)

        try {
            const foodList = await displayCursor.toArray()
            const totalNumfood = await food.countDocuments(query)
            return { foodList, totalNumfood }
          } catch (e) {
            console.error(
              `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { foodList: [], totalNumfood: 0 }
          }
    }

  


}