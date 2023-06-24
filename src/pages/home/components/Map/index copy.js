import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";

import ReactMapGL, {
  Marker,
  GeolocateControl,
  Source,
  Layer,
} from "react-map-gl";
import { WebMercatorViewport } from "viewport-mercator-project";
import {
  FloatingMarker,
  FLOATING_MARKER_SIZES,
  FLOATING_MARKER_ANCHOR_POSITIONS,
  FLOATING_MARKER_ANCHOR_TYPES,
  LocationPuck,
  LOCATION_PUCK_TYPES,
} from "baseui/map-marker";
import getDistance from "../../../../utils/getDistance";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Map.module.sass";
import { useDeepCompareCallback } from "../../../../libs/utils";
import { destination } from "@turf/turf";

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

function Map(props) {
  const { handleService, service, app, cardHeight } = props;

  const [routeGeoJSON, setRouteGeoJSON] = useState(null);
  const [positionOrigin, setPositionOrigin] = useState("left");
  const [positionDestination, setPositionDestination] = useState("left");

  const originRef = useRef(null);
  const destinationRef = useRef(null);

  useCallback(() => {
    if (!originRef.current) return;
    const rect = originRef.current.getBoundingClientRect();

    if (rect.left < window.innerWidth - rect.right) {
      console.log("Elemento está mais perto do lado esquerdo do viewport");
      setPositionOrigin("right");
    } else {
      console.log("Elemento está mais perto do lado direito do viewport");
      setPositionOrigin("left");
    }
  }, [originRef, service.origin, service.destination]);

  useCallback(() => {
    if (!destinationRef.current) return;
    const rect = destinationRef.current.getBoundingClientRect();

    if (rect.left < window.innerWidth - rect.right) {
      console.log("Elemento está mais perto do lado esquerdo do viewport");
      setPositionDestination("right");
    } else {
      console.log("Elemento está mais perto do lado direito do viewport");
      setPositionDestination("left");
    }
  }, [destinationRef, service.destination, service.origin]);

  const newService = useMemo(
    () =>
      service.map((item) => ({
        origin: item.origin,
        location: item.location,
        destination: item.destination,
      })),
    [service.location, service.origin, service.destination]
  );

  const [viewport, setViewport] = useState({
    latitude: newService.latitude,
    longitude: newService.longitude,
    height: "100%",
    width: "100%",
    zoom: 15.9,
    padding: 20,
  });

  console.log(newService);

  const getRouter = async (origin, destination) => {
    try {
      const newRouteGeoJSON = await getDistance(origin, destination);

      return newRouteGeoJSON;
    } catch (error) {
      console.error("Erro ao carregar o GeoJSON:", error);
    }
  };

  const setNewUserLocation = (newLocation) => {
    setViewport({
      ...viewport,
      ...newLocation,
    });
  };

  const getLocation = useCallback(() => {
    if (!service.location) return;

    setNewUserLocation({
      longitude: service.location[0],
      latitude: service.location[1],
      zoom: 15.9,
    });
  }, [service.location]);

  const getOrigin = useCallback(() => {
    if (!service.origin) return;

    setNewUserLocation({
      longitude: service.origin[0],
      latitude: service.origin[1],
      zoom: 15.9,
    });
  }, [service.origin]);

  useEffect(() => {
    getLocation();
    getOrigin();

    getDestination();
  }, [service.location, service.origin, service.destination]);

  const getDestination = () => {
    if (!newService.destination) return;

  const routeGeoJSON =  getRouter(newService.origin,newService.destination);

    const coordinates = routeGeoJSON.geometry?.coordinates;

    const tamanho = coordinates.length - 1;
    const minCord = coordinates[0];
    const maxCord = coordinates[tamanho];
    const padding = 15;

    const viewport = {
      longitude: (minCord[0] + maxCord[0]) / 2,
      latitude: (minCord[1] + maxCord[1]) / 2,
      zoom: 1,
      width: window.innerWidth - 30,
      height: cardHeight.height - 50,
    };

    const { longitude, latitude, zoom } = new WebMercatorViewport(
      viewport
    ).fitBounds(
      [
        [minCord[0], minCord[1]],
        [maxCord[0], maxCord[1]],
      ],
      { padding }
    );

    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom,
    });
  }

  const renderMarkers = useMemo(() => {
    return (
      <>
        {service.location && !service.origin && (
          <Marker
            longitude={service.location[0]}
            latitude={service.location[1]}
          >
            <div id="ping" className={styles.ping}>
              <div>
                <div className={styles.dot} id="dot" />
                <LocationPuck type={LOCATION_PUCK_TYPES.consumer} />
              </div>
            </div>
          </Marker>
        )}

        {service.origin && (
          <Marker
            style={{ padding: 20 }}
            longitude={service.origin[0]}
            latitude={service.origin[1]}
          >
            <FloatingMarker
              label={"..."}
              size={FLOATING_MARKER_SIZES.small}
              startEnhancer={() => (
                <span
                  ref={originRef}
                  style={{
                    maxWidth: 120,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {service.originPlace}
                </span>
              )}
              anchor={
                positionOrigin == "left"
                  ? FLOATING_MARKER_ANCHOR_POSITIONS.bottomRight
                  : FLOATING_MARKER_ANCHOR_POSITIONS.bottomLeft
              }
            />
          </Marker>
        )}

        {service.destination && (
          <Marker
            latitude={service.destination[1]}
            longitude={service.destination[0]}
          >
            <FloatingMarker
              label={"..."}
              size={FLOATING_MARKER_SIZES.small}
              anchor={
                positionDestination == "left"
                  ? FLOATING_MARKER_ANCHOR_POSITIONS.bottomRight
                  : FLOATING_MARKER_ANCHOR_POSITIONS.bottomLeft
              }
              anchorType={FLOATING_MARKER_ANCHOR_TYPES.square}
              startEnhancer={() => (
                <span
                  ref={destinationRef}
                  style={{
                    maxWidth: 120,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {service.destinationPlace}
                </span>
              )}
            />
          </Marker>
        )}

        {service.origin && service.destination && routeGeoJSON && (
          <Source id="route" type="geojson" data={routeGeoJSON}>
            <Layer {...layerStyle} />
          </Source>
        )}
      </>
    );
  }, [service.location, service.origin, service.destination, routeGeoJSON]);

  return (
    <ReactMapGL
      {...viewport}
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
