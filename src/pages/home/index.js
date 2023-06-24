import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import styles from "./style.module.sass";
import Map from "./components/Map";
import { useSelector, useDispatch } from "react-redux";
import { setService } from "../../context/serviceSlice";
import { setApp } from "../../context/appSlice";
import useHandleConfig from "../../hooks/useConfig";
import useHandleNotification from "../../hooks/useNotification";
import useHandleService from "../../hooks/useService";
import { toName } from "../../libs/utils";
import getMylocation from "../../utils/getMylocation";
import CardHome from "../../components/CardHome";

const Index = () => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service.service);
  const app = useSelector((state) => state.app.app);
  const { config } = useHandleConfig();
  const { user } = useHandleService();

  const divRef = useRef(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [myLocation, setMyLocation] = useState("");
  const [cardHeight, setCardHeight] = useState({ height: 500, width: 360 });
  const [newLocation, setNewLocation] = useState(null);
  const [resize, setResize] = useState(true);

  const isOpen = useMemo(() => app.isOpen, [app.isOpen]);
  const step = useMemo(() => app.step, [app.step]);
  const [isLoad, setIsLoad] = useState(false);

  const getHeigt = useCallback(() => {
    if (divRef.current) {
      const { clientHeight, clientWidth } = divRef.current;

      if (cardHeight.height == clientHeight) return;
      setCardHeight({ height: clientHeight, width: clientWidth });
    }
  }, [isOpen, step]);



  const getCurrentLocation = () => {
    (async () => {
      try {
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        handleService({
          location: [longitude, latitude],
          latitude: latitude,
          longitude: longitude,
          type: 'location'
        });
      } catch (error) {
        console.error("Error getting current location:", error);
      }
    })();
  };

  useEffect(() => {
    if(!isLoad) return
    getCurrentLocation();

    return () => {
      setIsLoad(false);
    };
  }, [isLoad]);

  const handleService = (dados) => {
    dispatch(setService({ ...service, ...dados }));
  };

  const handleApp = (dados) => {
    if (dados == app) return;

    dispatch(setApp({ ...app, ...dados }));
  };

  const handleOpen = () => {
    if (app.isOpen == true) return;

    dispatch(setApp({ ...app, isOpen: true }));
  };

  const handleLoad = (e) => {
    e.preventDefault();

    setIsLoad(true);
  };

  const handleClose = () => handleApp({ isOpen: false, step: 1 });

  return (
    <div onLoad={handleLoad} className={styles["home"]}>
      <div ref={divRef} className={styles.map}>
        <Map
          cardHeight={cardHeight}
          setNewLocation={setNewLocation}
          service={service}
          handleService={handleService}
          app={app}
          myLocation={myLocation}
          config={config}
          latitude={latitude}
          step={app.step}
          longitude={longitude}
          user={user && user.name && toName(user.name)}
        />
      </div>
      <div data-isopen={app.isOpen} className={styles.card}>
        <CardHome
          handleService={handleService}
          service={service}
          handleApp={handleApp}
          app={app}
          isOpen={app.isOpen}
          config={config}
          myLocation={myLocation}
          handleOpen={handleOpen}
          handleClose={handleClose}
          latitude={latitude}
          longitude={longitude}
          user={user}
          setNewLocation={setNewLocation}
          step={app.step}
        />
      </div>
    </div>
  );
};

export default Index;
