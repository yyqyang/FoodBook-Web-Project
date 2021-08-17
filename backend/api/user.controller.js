import UserDAO from "../dao/userDAO.js";

export default class userController {
  static async apiGetUser(req, res, next) {
    let filters = {};
    if (req.query.user_name) {
      filters.user_name = req.query.user_name;
    } else if (req.query.user_id) {
      filters.user_id = req.query.user_id;
    }

    const { userList, totalNumUser } = await UserDAO.getUser({
      filters,
    });

    let response = {
      users: userList,
      filters: filters,
      total_results: totalNumUser,
    };
    res.json(response);
  }

  static async apiDeleteUser(req, res, next) {
    try {
      const userId = req.query.user_id;
      const reviewResponse = await UserDAO.deleteUser(userId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateUser(req, res, next) {
    try {
      const userId = req.body.user_id;
      const newfoodlist = req.body.foodlist;
      const newtotal_calorie = req.body.total_calorie;
      const newdate = new Date();

      const userResponse = await UserDAO.updateUser(
        userId,
        newfoodlist,
        newtotal_calorie,
        newdate
      );
      var { error } = userResponse;
      if (error) {
        res.status(400).json({ error });
      }

      // if (userResponse.modifiedCount === 0) {
      //   throw new Error(
      //     "unable to update user - user may not be original poster",
      //   )
      // }
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiPostReview(req, res, next) {}
}
