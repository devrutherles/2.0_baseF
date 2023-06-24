import React from "react";
import {
  FloatingMarker,
  FLOATING_MARKER_SIZES,
  FLOATING_MARKER_ANCHOR_POSITIONS,
  FLOATING_MARKER_ANCHOR_TYPES,
} from "baseui/map-marker";

import { Marker } from "react-map-gl";

const LocationMaker =  (props) => {


const { destination, label , longitude,latitude} = props;




  return ( 

  <Marker
    style={{ padding: 20 }}
    longitude={longitude}
    latitude={latitude}
  >
    <FloatingMarker
      label={"..."}
      size={FLOATING_MARKER_SIZES.small}
      startEnhancer={() => (
        <span
         
          style={{
            maxWidth: 120,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {label}
        </span>
      )}
      anchor={FLOATING_MARKER_ANCHOR_POSITIONS.bottomRight}
       anchorType={destination ? FLOATING_MARKER_ANCHOR_TYPES.square : FLOATING_MARKER_ANCHOR_TYPES.circle }
     
    />
    </Marker>
  );
};

export default React.memo(LocationMaker) 
