import UserDAO from "../dao/userDAO.js"
import userDAO from "../dao/userDAO.js"

export default class userController {
  static async apiGetUser(req, res, next) {

    let filters = {}
    if (req.query.user_name) {
      filters.user_name = req.query.user_name
    } else if (req.query.user_id) {
      filters.user_id = req.query.user_id
    }

    const { userList, totalNumUser } = await userDAO.getUser({
      filters,
    })

    let response = {
      users: userList,
      filters: filters,
      total_results: totalNumUser,
    }
    res.json(response)
  }

  static async apiDeleteUser(req, res, next) {
    try{
      const userId = req.query.user_id
      const reviewResponse = await UserDAO.deleteUser(
        userId
      )
      res.json( {status: "success"})
    } catch (e) {
      res.status(500).json({ error: e.message })
    }

  }
}