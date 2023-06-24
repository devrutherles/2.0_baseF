import { MAP_BOX_TOKEN } from "../constants/keys";
import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetRoute = async (latitude,longitude) => {

  let route = [];
  try {
    const url = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${longitude}&latitude=${latitude}&access_token=${MAP_BOX_TOKEN}`;
    const response = await axios.get(url);

    route = response.data.features;
  } catch (error) {
    console.error(error);
  }

  return route;
};

export default useGetRoute;
