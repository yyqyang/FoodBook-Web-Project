import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5001/api/v2/foodbook_user",
  headers: {
    "Content-type": "application/json",
  },
});