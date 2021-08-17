
import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let users

export default class UserDAO{
    static async injectDB(conn) {
        if (users) {
          return
        }
        try {
          users = await conn.db(process.env.USER_NS).collection("foodbook_user")
        } catch (e) {
          console.error(
            `Unable to establish a collection handle in UserDAO: ${e}`,
          )
        }
    }

    static async getUser({
        filters = null,
        //page = 0,
        //foodPerPage = 20,
    } = {}) {
        
        let query

        if (filters) {
          if ("user_name" in filters) {
            query = { "user_name": { $eq: filters["user_name"]} }
          } else if ("user_id" in filters) {
            query = {"user_id": {$eq: filters["user_id"]}}
          }
        }

        // now we have query

        let cursor
        try {
          cursor = await users
            .find(query)
        } catch (e) {
          console.error(`Unable to issue find command, ${e}`)
          return { userList: [], totalNumUser: 0 }
        }

        const displayCursor = cursor
        // if there is a lot in the list, use limit(foodPerPage).skip(foodPerPage * page)

        try {
            const userList = await displayCursor.toArray()
            const totalNumUser = await users.countDocuments(query)
            return { userList, totalNumUser }
          } catch (e) {
            console.error(
              `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { userList: [], totalNumUser: 0 }
          }
    }

    static async addUser(userId) {
      try {
        const newUser = { user_id:userId }
  
        return await users.insertOne(newUser)
      } catch (e) {
        console.error(`Unable to add user: ${e}`)
        return { error: e }
      }
    }

    static async deleteUser(userId){
      try{
        const deleteResponse = await users.deleteOne({
          user_id:userId
        })
        return deleteResponse
      } catch(e){
        console.error(`Unable to delete user: ${e}`)
        return { error: e }
      }
    }

    static async updateUser(userId, newfoodlist, newtotal_calorie, newdate){
      try {
        const updateResponse = await users.updateOne(
          { user_id: userId },
          { $set: {foodlist: newfoodlist, total_calorie: newtotal_calorie, date: newdate}},
        )
        return updateResponse
      } catch(e){
        console.error(`Unable to update user: ${e}`)
        return { error:e }
      }
    }
}