import axios from "axios";

export default class LevelAreaApi {
  static fetch() {
    return axios.get("http://localhost:3000/level-areas");
  }
  static create(levelAreaObject) {
    return axios.post("http://localhost:3000/level-area", levelAreaObject);
  }
}
