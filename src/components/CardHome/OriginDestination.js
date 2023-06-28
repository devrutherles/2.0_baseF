import React, { useEffect, useRef, useState } from "react";

import Image from "../../components/Imagem";
import List from "../List";

import History from "../History";

import GetRouter from "../../utils/getRouter";

import style from "./Imput.module.sass";
import { CSSTransition } from 'react-transition-group';




async function storageHistory(objeto) {



  let arraySalvo = localStorage.getItem('history');
  if (arraySalvo && arraySalvo.length > 3) return;

  let novoArray = [];

  if (arraySalvo) {

    novoArray = JSON.parse(arraySalvo);
  }

  const objetoExistente = novoArray.find(item => JSON.stringify(item) === JSON.stringify(objeto));

  if (!objetoExistente) {

    novoArray.push(objeto);

    localStorage.setItem('history', JSON.stringify(novoArray));
  }
}



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
    focus: false,
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
        latitude: data.properties.coordinates.latitude,
        longitude: data.properties.coordinates.longitude,
        type: 'origin'

      });


      storageHistory({

        place: data.properties.name,
        location: [
          data.properties.coordinates.longitude,
          data.properties.coordinates.latitude,
        ],
        latitude: data.properties.coordinates.latitude,
        longitude: data.properties.coordinates.longitude,
        type: 'origin'
      })


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
        latitude: data.properties.coordinates.latitude,
        longitude: data.properties.coordinates.longitude,
        type: 'destination'

      });



      storageHistory(
        {

          place: data.properties.name,
          location: [
            data.properties.coordinates.longitude,
            data.properties.coordinates.latitude,
          ],
          latitude: data.properties.coordinates.latitude,
          longitude: data.properties.coordinates.longitude,
          type: 'destination'


        })





      if (app.step == 1) {

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

          {!service.origin && (
            <History
              handleService={handleService}
              service={service}
              lestIcon={false}
              text={"Sem endereço salvo"}
              label={"Recentes"}
              icon={require("../../images/hours.svg")}
              setLocationInput={setLocationInput}
              locationInput={locationInput}
            />
          )}
        </div>
      </div>

      {locationList.list.map((item, key) => (
      

          <div key={key} data-isopen={app.isOpen} className={style.list}>





            <List
              handleSetOrigem={handleSetOrigem}
              suggestion={item}
              icon={require("../../images/pin.svg")}
              input={locationInput.id}
            />



          </div>


      )



      )}
    </div>
  );
};

export default OriginDestination;
