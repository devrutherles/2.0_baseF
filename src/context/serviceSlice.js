import { createSlice } from "@reduxjs/toolkit";
 

const ServiceSlice = createSlice({
  name: "service",
  initialState: {
    service: {
      origin: null,
      destination: null,
      location: [-122.38856031220648,37.768495131168336] ,
      distance: 0,
      value: "",
      id: "",
      type: null,
      servico: "",
      helpers: 0,
      latitude:  37.768495131168336,
      longitude:  -122.38856031220648,
      mounters: 0,
      hours: 0,
      originPlace: "",
      destinationPlace: "",
      routeGeoJSON: null,
      details: '',
      labelLocation: null,
   
      onLoad: null
    },

    
  },

  reducers: {
    setService: (state, action) => {
      state.service = action.payload;
    },
  },
});

export const { setService } = ServiceSlice.actions;

export default ServiceSlice.reducer;
