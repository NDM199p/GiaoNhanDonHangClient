import { createAsyncThunk } from "@reduxjs/toolkit";
import TransitAgentApi from "./Api";

export default class TransitAgentAction {
  static addAll = createAsyncThunk("transitAgent/addAll", async () => {
    let { data } = await TransitAgentApi.fetch();
    return data;
  });

  static add = createAsyncThunk("transitAgent/add", async (object, { rejectWithValue }) => {
    let { data } = await TransitAgentApi.create(object.transitAgentObject);
    if (!data.id) return rejectWithValue("Create transitAgent fail.");
    return data;
  });

  static remove = createAsyncThunk("transitAgent/remove", async (object, { rejectWithValue }) => {
    let { data } = await TransitAgentApi.remove(object.transitAgentId);
    if (!data === 0) return rejectWithValue("Delete transitAgent fail.");
    return object.transitAgentId;
  });
}
