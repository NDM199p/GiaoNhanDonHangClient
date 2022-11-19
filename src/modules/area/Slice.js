import { createSlice } from "@reduxjs/toolkit";
import AreaAction from "./Action";

const AreaSlice = createSlice({
  name: "area",
  initialState: {
    areas: [],
  },
  extraReducers: (builder) => {
    builder.addCase(AreaAction.addAll.fulfilled, (state, action) => {
      state.areas = action.payload;
    });

    builder.addCase(AreaAction.remove.fulfilled, (state, action) => {
      state.areas = state.areas.filter((area) => area.id !== action.payload);
    });
  },
});

export default AreaSlice.reducer;
