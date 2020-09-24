import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2d6d9.cloudfunctions.net/api/",
  // baseURL: "http://localhost:5001/clone-2d6d9/us-central1/api", // API functions link
});

export default instance;
