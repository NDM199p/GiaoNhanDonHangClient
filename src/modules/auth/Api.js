import axios from "axios";

export default class AuthApi {
  static login = (loginFields) => {
    return axios.post("http://localhost:3000/token", loginFields);
  };
}
