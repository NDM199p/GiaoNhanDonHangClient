import { createSlice } from "@reduxjs/toolkit";
import AuthAction from "./Actions";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    auth: {
      jwt: null,
      id: null,
    },
    error: {
      isError: false,
      message: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthAction.add.fulfilled, (state, action) => {
        state.auth.id = action.payload.id;
        state.auth.jwt = action.payload.jwt;
      })
      .addCase(AuthAction.add.rejected, (state, action) => {
        state.error.isError = true;
        state.error.message = action.error.message;
      });

    builder.addCase(AuthAction.remove.fulfilled, (state, action) => {
      state.auth = { jwt: null, id: null };
    });
  },
});

export default AuthSlice.reducer;
