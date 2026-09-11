import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isAuthenticated: Boolean(localStorage.getItem("token")),
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isAuthenticated = action.payload.isSuccess;
    },
    clearCredentials: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.getCurrentUser.matchPending, (state) => {
        state.isAuthReady = false;
        console.log("teste");
      })
      // Dito na part ay mag kekeep sakin mag validate ng user kung yung cookie nya is pwede pa kagatan
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, action) => {
          const user = action.payload?.user ?? null;

          state.user = user;
          state.isAuthenticated = Boolean(user);
        },
      )
      // Dito na part will tell me kung succeded yung Login at iseset nya yung user slicer ko para mayreference ako
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })
      // Dito na part ay mag reresponse ng error kapag wwala ng cookie si Cookie monster
      .addMatcher(authApi.endpoints.getCurrentUser.matchRejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isAuthReady = true;
      });
    // Backend logout succeeded
    // .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
    //   state.user = null;
    //   state.isAuthenticated = false;
    //   state.isAuthReady = true;
    // });
  },
});

export const { setCredentials, clearCredentials, setUser } = authSlice.actions;
export default authSlice.reducer;
