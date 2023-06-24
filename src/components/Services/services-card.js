import Image from "../../components/Imagem";
import { memo, useState, useEffect } from "react";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import styles from "./services-card.module.sass";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { formatPrice } from "../../utils";
const ServicesCard = (props) => {

  const { config, handleService, service, app, handleApp, createService
  } = props


  const { distance } = service;

  const helpers = service.helpers ||  config.helpers
  const hours =  service.hours || config.hours


  const valor = (id, value_km, value_base, value_helpers, value_hours, helpers, hours) => {
   
    if (id == 3) {
      let preco = distance < 6 ? 9 : distance * value_km;
      return preco

    } else if (id == 1) {
      let preco = value_base + distance * value_km + helpers * value_helpers
      return preco
    } else {
      let preco = value_hours * hours + helpers * value_helpers + 1 * value_hours;
      return preco
    }


  }


  return (
    <div onClick={() => {
      app.step == 2 &&
      createService({

      service: config?.service,
      helpers: config?.helpers,
      hours: config?.hours,
      image2: config?.image2,
      id: config?.id,


    });

    handleApp(
      {...app,
      step: 3
    })
    
    
    }} className={styles.service_card}>

      <div className={styles.header}>

        <div className={styles.image_service}>
          <Image
            w={78}
            h={76}
            alt=""
            src={config?.image2}
          />
        </div>
        <div className={styles.detaills}>
          <div className={styles.row}>

            <b>{config?.description}</b>
            {formatPrice(valor(config?.id, config?.value_km, config?.value_base, config?.value_helpers, config?.value_hours, helpers, hours))}
          </div>


          <div className={styles.row}>

            <p>
              {config?.detalhes}
            </p>


            <div className={styles.icons}>
              <div>{config?.id != 3 && <><PeopleAltOutlinedIcon /> <span>{helpers}</span> </>}</div>
              <div>{config?.id == 2 && <><AccessTimeOutlinedIcon /> <span>{hours}</span> </>}</div>
            </div>

          </div>



        </div>
      </div>


    </div>

  );
};

export default ServicesCard;
