import { configureStore } from "@reduxjs/toolkit";
import { configurationSlice } from "./slices/configuration";
import { organizationSlice } from "./slices/organization";

export const store = configureStore({
  reducer: {
    setInitConf: configurationSlice.reducer,
    setOrganizationSlice: organizationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
