import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freteme.com/api/",
  headers: { "content-type": "application/json" },
}





);

export default api;