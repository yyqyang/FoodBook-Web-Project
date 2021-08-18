import UsersDAO from "../dao/usersDAO.js"

export default class UsersController {
  static async apiGetUser(req, res, next) {


    let filters = {}
    if (req.query.user_name) {
      filters.user_name = req.query.user_name
    } else if (req.query.user_id) {
      filters.user_id = req.query.user_id
    }

    const { userList, totalNumUser } = await UsersDAO.getUser({
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
      const userId = req.body.user_id

      console.log(userId)
      const userResponse = await UsersDAO.deleteUser(
        userId,
      )
      res.json( {status: "success"})
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiPostUser(req, res, next) {
    try {
      const userName = req.body.user_name
      const userId = req.body.user_id

      const userResponse = await UsersDAO.addUser(
        userName,
        userId,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }



}