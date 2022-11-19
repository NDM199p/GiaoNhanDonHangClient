import axios from "axios";

export default class WarehoseApi {
  static fetchOrderWaitingForCustomerToSends(transitAgentId) {
    return axios.get(
      `http://localhost:3000/warehose/${transitAgentId}/orders/waiting-for-customer`
    );
  }

  static fetchOrders() {
    return axios.get("http://localhost:3000/warehose/orders");
  }

  static create(warehoseObject) {
    return axios.post("http://localhost:3000/transit-agent", warehoseObject);
  }

  static remove(warehoseId) {
    return axios.delete("http://localhost:3000/transit-agent/" + warehoseId);
  }
}
