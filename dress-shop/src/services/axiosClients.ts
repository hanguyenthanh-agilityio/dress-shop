import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://654bacf55b38a59f28ef80fd.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
