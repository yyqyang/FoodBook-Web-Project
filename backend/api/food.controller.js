import foodDAO from "../dao/foodDAO.js"

export default class foodController {
  static async apiGetFood(req, res, next) {
    const foodPerPage = req.query.foodPerPage ? parseInt(req.query.foodPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.food_name) {
      filters.food_name = req.query.food_name
    } 

    const { foodList, totalNumfood } = await foodDAO.getFood({
      filters,
      page,
      foodPerPage,
    })

    let response = {
      food: foodList,
      page: page,
      filters: filters,
      entries_per_page: foodPerPage,
      total_results: totalNumfood,
    }
    res.json(response)
  }
}