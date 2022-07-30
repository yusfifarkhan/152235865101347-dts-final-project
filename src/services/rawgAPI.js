import axios from "axios";

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70fc88c14f1143b593e46226955b29f5",
  },
});

export default rawgApi;
