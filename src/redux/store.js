import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    loading: loadingReducer,
  },
});