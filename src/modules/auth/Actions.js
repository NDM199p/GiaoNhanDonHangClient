import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthApi from "./Api";

export default class AuthAction {
  static add = createAsyncThunk("auth/add", async (loginObject) => {
    let auth = await AuthApi.login(loginObject);
    if (!auth.data.jwt) throw new Error("Login Fail");
    localStorage.setItem("token", auth.data.jwt);
    return auth.data;
  });

  static remove = createAsyncThunk("auth/remove", async () => {
    return null;
  });

  static addFromLocalStogare = createAsyncThunk("auth/addFromLocalStogare", async () => {
    localStorage.getItem("token");
  });
}
