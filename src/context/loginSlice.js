import { createSlice } from "@reduxjs/toolkit";

const LocationSlice = createSlice({
  name: "user",
  initialState: {
    auth: {
      email: "",
      name: "",
      isAuth: false,
      profile: "",
    },
  },

  setUser: (state, action) => {
    state.user = action.payload;
  },
});
