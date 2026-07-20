import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authAPI";

const initialState = {
  user: null,
  isAuthenticated: false,
  isAuthReady: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // return {
      //   ...state,
      //   user: action.payload,
      //   isAuthenticated: true,
      // }
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAuthReady = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isAuthReady = false;
    },
  },
  // Extra Reducers ay parang mga Switch Case lalo na yung addMatcher Function
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.getCurrentUser.matchPending, (state) => {
        state.isAuthReady = false;
        state.isAuthenticated = false;
      })
      // Dito na part will tell me kung succeded yung Login
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isAuthReady = true;
      })
      // Dito na part ay mag kekeep sakin mag validate ng user kung yung cookie nya is pwede pa kagatan
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, action) => {
          state.user = action.payload.user;
          state.isAuthenticated = true;
          state.isAuthReady = true;
        },
      )
      // Dito na part ay mag reresponse ng error kapag wwala ng cookie si Cookie monster
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchRejected,
        (state, action) => {
          state.user = action.payload.user;
          state.isAuthenticated = false;
          state.isAuthReady = false;
        },
      )
      // Backend logout succeeded
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isAuthReady = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
