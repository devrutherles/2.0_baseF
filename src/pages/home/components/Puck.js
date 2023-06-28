import React from "react";
import {

  LocationPuck,
  LOCATION_PUCK_TYPES,
} from "baseui/map-marker";

import styles from "./Map/Map.module.sass";
import { Marker } from "react-map-gl";

const Puck = (props) => {
const {latitude,longitude} = props


  return ( 
  <Marker
    style={{ padding: 20 }}
    longitude={longitude}
    latitude={latitude}
  >
  <div id="ping" className={styles.ping}>
    <div>
      <div className={styles.dot} id="dot" />
      <LocationPuck type={LOCATION_PUCK_TYPES.consumer} />
    </div>
  </div>

  </Marker>
  
  )
}

export default React.memo(Puck) ;
