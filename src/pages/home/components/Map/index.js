import React, { useEffect, useState, useMemo } from "react";

import ReactMapGL, { GeolocateControl } from "react-map-gl";

import LocationMaker from "../LocationMaker";
import Puck from "../Puck";

const layerStyle = {
  id: "route",
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#2b85ff",
    "line-opacity": 0.8,
    "line-width": {
      base: 1,
      stops: [
        [12, 4],
        [22, 15],
        [32, 25],
      ],
    },
    "line-blur": 0.5,
  },
};

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const localDefaut = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};

function Map(props) {
  const { handleService, service, app, cardHeight } = props;
  const [routeGeoJSON, setRouteGeoJSON] = useState(null);

  const [status, setStatus] = useState(null);
  const {
    location,
    origin,
    destination,
    type,
    originPlace,
    destinationPlace,
    latitude,
    longitude,
  } = service;

  const [local, setLocal] = useState({
    latitude: localDefaut.latitude,
    longitude: localDefaut.longitude,
  });

  const [size, setSize] = useState({
    height: "100%",
    width: "100%",
    zoom: 15.9,
    padding: 20,
  });

  const [viewport, setViewport] = useState({
    latitude: localDefaut.latitude,
    longitude: localDefaut.longitude,
  });

  function neWlocal(latitude, longitude) {

    setViewport({
      latitude: latitude,
      longitude: longitude,
    });
    
  }

  console.log(service);

  useEffect(() => {
    neWlocal(latitude, longitude);

    return () => {
      neWlocal({
        latitude: localDefaut.latitude,
        longitude: localDefaut.longitude,
      });
    };
  }, [latitude, longitude]);

  const renderMarkers = useMemo(() => {
    return (
      <>
        {type == "location" && (
          <Puck latitude={location[1]} longitude={location[0]} />
        )}

        {type && type == "origin" && (
          <LocationMaker
            destination={false}
            latitude={origin[1]}
            longitude={origin[0]}
            label={originPlace}
          />
        )}

        {type == "destination" && (
          <LocationMaker
            destination={true}
            label={destinationPlace}
            latitude={destination[1]}
            longitude={longitude[0]}
          />
        )}
      </>
    );
  }, [latitude, longitude]);

  return (
    <ReactMapGL
      {...viewport}
      {...size}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/rutherles/clijbpqac00ni01qh0c2i6b5w"
      onViewportChange={setViewport}
    >
      <GeolocateControl />

      {renderMarkers}
    </ReactMapGL>
  );
}

export default React.memo(Map);
