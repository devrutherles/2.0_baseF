import React, { useRef, useState } from "react";

import Image from "../../components/Imagem";
import List from "../List";

import History from "../History";

import GetRouter from "../../utils/getRouter";

import style from "./Imput.module.sass";

const OriginDestination = (props) => {
  const [value, setValue] = React.useState("");

  const { handleService, service, app, handleApp } = props;
  const { location } = service;

  const OriginRef = useRef(null);
  const DestinationRef = useRef(null);
  const lat = location ? location[1] : null;
  const lng = location ? location[0] : null;
  const [locationInput, setLocationInput] = useState({
    valueOrigin: service.originPlace || "",
    placeOrigin: "",
    valueDestination: service.destinationPlace || "",
    placeDestination: "",
    foco: false,
    id: null,
  });

  const [locationList, setLocationList] = useState({
    list: [],
    isOpen: false,
    inputType: "",
  });

  const handleSetOrigem = async (data) => {
    if (locationInput.id === "origin") {
      setLocationInput({
        ...locationList,
        valueOrigin: data.properties.name,
      });

      handleService({
        originPlace: data.properties.name,
        origin: [
          data.properties.coordinates.longitude,
          data.properties.coordinates.latitude,
        ],
        latitude: data.properties.coordinates.longitude,
        longitude: data.properties.coordinates.latitude,
        type: 'origin'
        
      });

      setLocationList({
        ...locationList,
        list: [],
        isOpen: false,
      });
    } else {
      setLocationInput({
        ...locationInput,
        valueDestination: data.properties.name,
      });

      setLocationList({
        ...locationList,
        list: [],
        isOpen: false,
      });

      handleService({
        destinationPlace: data.properties.name,
        destination: [
          data.properties.coordinates.longitude,
          data.properties.coordinates.latitude,
        ],
        latitude: data.properties.coordinates.longitude,
        longitude: data.properties.coordinates.latitude,
        type: 'destination'
       
      });

      if(app.step == 1){

      handleApp({
      step: 2
      });
    }
    }
  };

  const list = async (data) => {
    if (data.value.length < 3) {
      setLocationList({
        ...locationList,

        isOpen: false,
        list: [],
      });

      return;
    }

    const local = await GetRouter(data.value, lng, lat);

    setLocationList({
      ...locationList,
      list: local,
      isOpen: true,
    });

    if (!app.isOpen) {
      handleApp({
    
        isOpen: true
      });
    }
  };

  const handleInputChange = (data) => {
    if (data.id == "origin") {
      setLocationInput({
        ...locationInput,
        valueOrigin: data.value,
        id: data.id,
      });
    } else {
      setLocationInput({
        ...locationInput,
        valueDestination: data.value,
        id: data.id,
      });
    }

    list(data);
  };

  return (
    <div data-isopen={app.isOpen} className={style.container}>
      <div className={style.row}>
        <div className={style.coll_input}>
          <div className={style.origin}>
            <Image
              w={20}
              h={20}
              alt=""
              src={require("../../images/circleOrigem.svg")}
            />

            <input
              id="origin"
              name="origin"
              placeholder="De Onde?"
              onChange={(e) => handleInputChange(e.target)}
              value={locationInput.valueOrigin || ""}
              ref={OriginRef}
              type="text"
            />
            <Image alt="" src={require("../../images/calendar.svg")} />
          </div>

          {service.origin && (
            <div className={style.origin}>
              <Image
                w={20}
                h={20}
                alt=""
                src={require("../../images/circleDestination.svg")}
              />

              <input
                id="destination"
                name="destination"
                placeholder="Para  Onde?"
                onChange={(e) => handleInputChange(e.target)}
                value={locationInput.valueDestination || ""}
                ref={DestinationRef}
                type="text"
              />
            </div>
          )}

          {!service.destination && (
            <History
              lestIcon={false}
              text={"Sem endereço salvo"}
              label={"Recentes"}
              icon={require("../../images/hours.svg")}
            />
          )}
        </div>
      </div>

      {locationList.list.map((item, key) => (
        <div key={key} className={style.list}>
          <List
            handleSetOrigem={handleSetOrigem}
            suggestion={item}
            icon={require("../../images/pin.svg")}
            input={locationInput.id}
          />
        </div>
      ))}
    </div>
  );
};

export default OriginDestination;
