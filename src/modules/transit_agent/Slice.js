import { createSlice } from "@reduxjs/toolkit";
import TransitAgentAction from "./Action";

const TransitAgentSlice = createSlice({
  name: "transitAgent",
  initialState: {
    transitAgents: [],
    transitAgentError: false,
    isLoading: false,
    error: {
      message: null,
    },
  },
  extraReducers: (builder) => {
    builder.addCase(TransitAgentAction.addAll.fulfilled, (state, action) => {
      state.transitAgents = action.payload;
    });

    builder
      .addCase(TransitAgentAction.add.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transitAgents = state.transitAgents.filter((area) => area.id !== action.payload);
      })
      .addCase(TransitAgentAction.add.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(TransitAgentAction.add.rejected, (state, action) => {
        state.transitAgentError = true;
        state.isLoading = false;
        state.transitAgents.push(action.payload);
      });

    builder.addCase(TransitAgentAction.remove.fulfilled, (state, action) => {
      state.transitAgents = state.transitAgents.filter((area) => area.id !== action.payload);
    });
  },
});

export default TransitAgentSlice.reducer;
