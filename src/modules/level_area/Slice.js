import { createSlice } from "@reduxjs/toolkit";
import LevelAreaAction from "./Action";

const LevelAreaSlice = createSlice({
  name: "levelArea",
  initialState: {
    levelAreas: [],
  },
  extraReducers: (builder) => {
    builder.addCase(LevelAreaAction.addAll.fulfilled, (state, action) => {
      state.levelAreas = action.payload;
    });
  },
});

export default LevelAreaSlice.reducer;
