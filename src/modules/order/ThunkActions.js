import { createAsyncThunk } from "@reduxjs/toolkit";
import OrderApi from "./OrderApi";

// export const getOrders = createAsyncThunk("order/getOrders", async () => {
//   const { data } = await OrderApi.fetch();
//   return data;
// });

export default class OrderActions {
  static addAll = createAsyncThunk("order/addAll", async () => {
    const { data } = await OrderApi.fetch();
    return data;
  });

  static delete = createAsyncThunk("order/getOrders", async () => {
    const { data } = await OrderApi.fetch();
    return data;
  });

  static update = createAsyncThunk("order/getOrders", async () => {
    const { data } = await OrderApi.fetch();
    return data;
  });

  static add = createAsyncThunk("order/add", async (object, { rejectWithValue }) => {
    const { data } = await OrderApi.create(object.orderObject);
    if (!data.id) return rejectWithValue("Create Order Fail.");
    return data;
  });

  static cancel = createAsyncThunk("order/cancel", async (object, { rejectWithValue }) => {
    const { data } = await OrderApi.cancel(object.orderId);
    if (!data[0] === 0) return rejectWithValue("Cancel order failed.");
    return object.orderId;
  });
}
