import axios from "axios";

export default class OrderApi {
  static fetch = () => {
    return axios.get("http://localhost:3000/orders");
  };

  static create(orderObject) {
    return axios.post("http://localhost:3000/order", orderObject);
  }

  static cancel(orderId) {
    return axios.put("http://localhost:3000/order-cancel/" + orderId);
  }
}
