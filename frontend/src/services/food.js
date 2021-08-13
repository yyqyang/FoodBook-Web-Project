import http from "../http-common";

class FoodDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  find(query, by = "food_name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createRecord(data) {
    return http.post("/review-new", data);
  }

  updateReview(data) {
    return http.put("/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
  }
}

export default new FoodDataService();
