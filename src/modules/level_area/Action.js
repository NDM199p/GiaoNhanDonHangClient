import { createAsyncThunk } from "@reduxjs/toolkit";
import LevelAreaApi from "./Api";

export default class LevelAreaAction {
  static addAll = createAsyncThunk("levelArea/addAll", async () => {
    let { data } = await LevelAreaApi.fetch();
    return data;
  });

  static add = createAsyncThunk("levelArea/add", async (object, { rejectWithValue }) => {
    let { data } = await LevelAreaApi.fetch();
    if (!data.id) return rejectWithValue("Create levelArea fail.");
    return data;
  });
}
