import axios from "axios";

export default axios.create({
  baseURL: "https://cs5610-foodbook-api.herokuapp.com/api/v2/foodbook",
  headers: {
    "Content-type": "application/json",
  },
});