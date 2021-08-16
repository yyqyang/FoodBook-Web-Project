import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get(``);
  }

  find(query, by = "user_name") {
    return http.get(`?${by}=${query}`);
  }

  createUser(data) {
    return http.post("/review-new", data);
  }

  updateUser(data) {
    return http.put("/review-edit", data);
  }

  deleteUser(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
  }
}

export default new UserDataService();
