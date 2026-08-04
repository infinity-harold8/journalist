import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authAPI";

const initialState = {
  user: null,
  // accessToken: null,
  isAuthenticated: false,
  isAuthReady: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   // return {
    //   //   ...state,
    //   //   user: action.payload,
    //   //   isAuthenticated: true,
    //   // }
    //   state.user = action.payload;
    //   state.isAuthenticated = true;
    //   state.isAuthReady = true;
    // },
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
        console.log("test");
        state.isAuthReady = false;
      })
      // Dito na part ay mag kekeep sakin mag validate ng user kung yung cookie nya is pwede pa kagatan
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, action) => {
          console.log("triggered");
          const user = action.payload?.user ?? null;

          state.user = user;
          state.isAuthenticated = Boolean(user);
          state.isAuthReady = true;
        },
      )
      // Dito na part will tell me kung succeded yung Login at iseset nya yung user slicer ko para mayreference ako
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        state.isAuthReady = true;
      })
      // Dito na part ay mag reresponse ng error kapag wwala ng cookie si Cookie monster
      .addMatcher(authApi.endpoints.getCurrentUser.matchRejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isAuthReady = true;
      })
      // Backend logout succeeded
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isAuthReady = true;
      });
  },
});

console.log(initialState);

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
