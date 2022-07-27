import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import employeesReducer from "../features/employees/employeesSlice"
import sidebarVisibilityReducer from "../features/sidebarVisibility/sidebarVisibilitySlice"


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    employees: employeesReducer,
    sidebarVisibility: sidebarVisibilityReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});
