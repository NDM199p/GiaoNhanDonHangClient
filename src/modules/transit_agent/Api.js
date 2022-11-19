import axios from "axios";

export default class TransitAgentApi {
  static fetch() {
    return axios.get("http://localhost:3000/transit-agents");
  }

  static create(transitAgentObject) {
    return axios.post("http://localhost:3000/transit-agent", transitAgentObject);
  }

  static remove(transitAgentId) {
    return axios.delete("http://localhost:3000/transit-agent/" + transitAgentId);
  }
}
