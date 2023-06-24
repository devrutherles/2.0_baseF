import { MAP_BOX_TOKEN } from "../constants/keys";
import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetRoute = async (data,lng,lat) => {

  const procimit = lat && lng ? `&proximity=${lng}%2C${lat}` : `&proximity=ip`

  const encodedUrl = encodeURI(data);
  let route = [];
  try {
    const url =`https://api.mapbox.com/search/geocode/v6/forward?q=${encodedUrl}&country=br&limit=3${procimit}&types=address%2Cstreet%2Cneighborhood&language=pt&autocomplete=true&access_token=${MAP_BOX_TOKEN}`;
    const response = await axios.get(url);


    route = response.data.features;
  } catch (error) {
    console.error(error);
  }

  return route;
};

export default useGetRoute;
