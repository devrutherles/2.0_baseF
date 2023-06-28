import * as React from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import OriginDestination from "./OriginDestination";
import styles from "./CardHome.module.sass";
import { useRef } from "react";
import Service from "../Services";
import { Button, IconButton } from "@mui/material";
import Order from "../Services/Order";
import ButtonNavigation from "../BottonNavigation";
import { Box } from 'native-base'
import cn from 'classnames'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const CardHome = (props) => {
  const {
    handleService,
    service,
    config,
    app,

    handleApp,
  } = props;

  const { step, isOpen } = app;

  return (
    <>
      <div data-isopen={isOpen} className={styles.notifications}>
        <div className={styles.block}>
          <div className={styles.header_card2}>
            <p>Por favor ative a permissção da localização</p>
          </div>

          <button className={styles.btn_1} id="btn_1">
            Permitir
          </button>
        </div>
      </div>

      <Card
        sx={{
          width: "100%",
          backgroundColor: '#f7f8fa',
          paddingBlock: 1,
          paddingInline: 1


        }}
        className={styles.card}
        data-isopen={isOpen}
      >

        <CardContent
          data-step={step}
          sx={{
            background: "#fff",


          }}
        >

          <Box style={{ padding: 20, borderRadius: 20 }} shadow={2} data-isopen={isOpen}>

            <div data-step={app.step} data-isopen={isOpen} className={cn(styles.list,  styles[`step_${app.step}`])}


              style={{ padding: 5 }}>
              {step == 1 && (
                <OriginDestination
                  service={service}
                  handleService={handleService}
                  handleApp={handleApp}
                  app={app}
                />
              )}

              {step == 2 && (
                <Service
                  service={service}
                  handleService={handleService}
                  handleApp={handleApp}
                  config={config}
                  app={app}
                />
              )}

              {step == 3 && (
                <Order
                  service={service}
                  handleService={handleService}
                  handleApp={handleApp}
                  config={config}
                  app={app}
                />
              )}

            </div>
          </Box>
        </CardContent>


        {!isOpen && (
          <div data-isopen={isOpen} className={styles.tab}>
            <ButtonNavigation />
          </div>
        )}

        {app.step != 1 && (

          <div className={styles.footer}>

            <div className={styles.content_footer}>

              <IconButton onClick={() => handleApp(
                {
                  ...app,
                  step: app.step - 1
                })}>
                <KeyboardBackspaceIcon />
              </IconButton>

            </div>

            <div className={styles.button}>
              <Button>Escolha o serviço</Button>
            </div>

          </div>
        )}


      </Card>

    </>
  );
};

export default CardHome;
