import http from "../http-common";

class FoodDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  find(query, by = "food_name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }
}

export default new FoodDataService();
