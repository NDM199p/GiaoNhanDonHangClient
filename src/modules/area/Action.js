import { createAsyncThunk } from "@reduxjs/toolkit";
import AreaApi from "./Api";

export default class AreaAction {
  static addAll = createAsyncThunk("area/addAll", async () => {
    let { data } = await AreaApi.fetch();
    return data;
  });

  static add = createAsyncThunk("area/add", async (object, { rejectWithValue }) => {
    let { data } = await AreaApi.create(object.areaObject);
    if (!data.id) return rejectWithValue("Create area fail.");
    return data;
  });

  static remove = createAsyncThunk("area/remove", async (object, { rejectWithValue }) => {
    let { data } = await AreaApi.remove(object.areaId);
    if (!data === 0) return rejectWithValue("Delete area fail.");
    return object.areaId;
  });
}
