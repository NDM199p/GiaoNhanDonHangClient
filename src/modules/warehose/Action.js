import { createAsyncThunk } from "@reduxjs/toolkit";
import WarehoseApi from "./Api";

export default class WarehoseAction {
  static addAll = createAsyncThunk("warehose/addAll", async () => {
    let { data } = await WarehoseApi.fetch();
    return data;
  });

  static add = createAsyncThunk("warehose/add", async (object, { rejectWithValue }) => {
    let { data } = await WarehoseApi.create(object.warehoseObject);
    if (!data.id) return rejectWithValue("Create warehose fail.");
    return data;
  });

  static remove = createAsyncThunk("warehose/remove", async (object, { rejectWithValue }) => {
    let { data } = await WarehoseApi.remove(object.warehoseId);
    if (!data === 0) return rejectWithValue("Delete warehose fail.");
    return object.warehoseId;
  });

  static addOrderWaitingForCustomerToSends = createAsyncThunk(
    "warehose/addAllOrderWaitingForCustomerToSends",
    async (object, { rejectWithValue }) => {
      let { data } = await WarehoseApi.fetchOrderWaitingForCustomerToSends(object.transitAgentId);
      if (!data[0]) return rejectWithValue("fetch orderWaitingForCustomerToSends fail.");
      return data;
    }
  );
}
