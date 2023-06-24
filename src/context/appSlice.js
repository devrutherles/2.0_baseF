import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    app: {
      isOpen: false,
      step: 1,
      selectService: 1,
      
      
    },
 

  },
  reducers: {
    setApp: (state, action) => {
      state.app = action.payload;
    },
   
  },
});

export const {setApp} = AppSlice.actions;

export default AppSlice.reducer;
