import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    clearCredentials: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
