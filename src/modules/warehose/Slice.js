import { createSlice } from "@reduxjs/toolkit";
import WarehoseAction from "./Action";

const WarehoseSlice = createSlice({
  name: "warehose",
  initialState: {
    warehoses: [],
    orders: [],
    orderWaitingForCustomerToSends: [],
    warehoseError: false,
    isLoading: false,
    error: {
      message: null,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(WarehoseAction.addAll.fulfilled, (state, action) => {
      state.warehoses = action.payload;
    });

    builder
      .addCase(WarehoseAction.add.fulfilled, (state, action) => {
        state.isLoading = false;
        state.warehoses = state.warehoses.filter((area) => area.id !== action.payload);
      })
      .addCase(WarehoseAction.add.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(WarehoseAction.add.rejected, (state, action) => {
        state.warehoseError = true;
        state.isLoading = false;
        state.warehoses.push(action.payload);
      });

    builder.addCase(WarehoseAction.remove.fulfilled, (state, action) => {
      state.warehoses = state.warehoses.filter((area) => area.id !== action.payload);
    });

    builder.addCase(WarehoseAction.addOrderWaitingForCustomerToSends.fulfilled, (state, action) => {
      state.orderWaitingForCustomerToSends = action.payload;
    });
  },
});

export default WarehoseSlice.reducer;
