"use client";

import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import ServiceSlice from "./serviceSlice";


export default configureStore({
  reducer: {
    app: AppSlice,
    service: ServiceSlice
  },
});
