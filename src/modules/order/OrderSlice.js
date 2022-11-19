import { createSlice } from "@reduxjs/toolkit";
import OrderActions from "./ThunkActions";

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    orderError: false,
    isLoading: false,
    error: {
      message: null,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(OrderActions.addAll.fulfilled, (state, action) => {
      state.orders = action.payload;
    });

    builder.addCase(OrderActions.delete.fulfilled, (state, action) => {});

    builder
      .addCase(OrderActions.add.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders.push(action.payload);
      })
      .addCase(OrderActions.add.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(OrderActions.add.rejected, (state, action) => {
        state.orderError = true;
        state.isLoading = false;
        state.error.message = action.payload;
      });

    builder
      .addCase(OrderActions.cancel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders[
          state.orders.findIndex((order) => order.id === action.payload)
        ].isCancel = true;
      })
      .addCase(OrderActions.cancel.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(OrderActions.cancel.rejected, (state, action) => {
        state.orderError = true;
        state.isLoading = false;
        state.error.message = action.payload;
      });
  },
});

export default OrderSlice.reducer;
