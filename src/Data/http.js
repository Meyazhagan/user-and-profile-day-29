import axios from "axios";

axios.defaults.baseURL = "https://611f24619771bf001785c6fb.mockapi.io/user/";

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
