import React, { useEffect, useState, useMemo } from "react";
import getDistance from "../../../../utils/getDistance";
import LocationMaker from "../LocationMaker";
import Puck from "../Puck";
import {layerStyle} from '../layerStyle'
import ReactMapGL, {
  Marker,
  GeolocateControl,
  Source,
  Layer,
  
} from "react-map-gl";
import getRouterJson from "../../../../utils/getRouterJson";



const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const localDefaut = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};

function Map(props) {
  const { handleService, service, app, cardHeight } = props;
  const [geoJson,setGeoJson] = useState(null) 
  const [routeGeoJSON, setRouteGeoJSON] = useState(null)
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

  const [viewport, setViewport] = useState({
    latitude: localDefaut.latitude,
    longitude: localDefaut.longitude,
    height: "100%",
    width: "100%",
    zoom: 15.9
  });


  const getgeoJson = async () => {
  const geoJson = await getDistance(origin,destination)
  const newViewport =  await getRouterJson(geoJson,cardHeight)
  setGeoJson(geoJson)

  setViewport({
    ...viewport,
    ...newViewport
  });

 

  }

console.log(service)

  useEffect(() => {



  if (type == 'destination') {

    getgeoJson()

   

   }

 
   setViewport({
    ...viewport,
    latitude:latitude,
    longitude:longitude
  });

    return () => {
      setViewport({
        ...viewport,
        latitude: localDefaut.latitude,
        longitude: localDefaut.longitude,
      });
    };
  }, [latitude,longitude]);



  const renderMarkers = useMemo(() => {
    if (type === "location") {
      return <Puck latitude={latitude} longitude={longitude} />;
    } else if (type === "origin") {
      return (
        <LocationMaker
          destination={false}
          latitude={latitude}
          longitude={longitude}
          label={originPlace}
        />
      );
    } else if (type === "destination") {
      return (

        <>
        <LocationMaker
          destination={true}
          label={destinationPlace}
          latitude={destination[1]}
          longitude={destination[0]}
        />

        <LocationMaker
        destination={false}
        latitude={origin[1]}
        longitude={origin[0]}
        label={originPlace}
      />
      </>
      );
    } else {
      return null;
    }
  }, [origin,destination,location]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/rutherles/clijbpqac00ni01qh0c2i6b5w"
      onViewportChange={setViewport}
    >
      {renderMarkers}

      {service.origin && service.destination && geoJson && (
          <Source id="route" type="geojson" data={geoJson}>
            <Layer {...layerStyle} />
          </Source>
        )}
      <GeolocateControl />
    </ReactMapGL>
  );
}

export default React.memo(Map) ;
