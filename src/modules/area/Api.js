import axios from "axios";

export default class AreaApi {
  static fetch() {
    return axios.get("http://localhost:3000/areas");
  }

  static create(areaObject) {
    return axios.post("http://localhost:3000/area", areaObject);
  }

  static remove(areaId) {
    return axios.delete("http://localhost:3000/area/" + areaId);
  }
}
