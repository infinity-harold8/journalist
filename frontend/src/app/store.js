import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import { authApi } from "../features/auth/authApi.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
