import NavBar from "./nav-bar";
import ServicesCard from "./services-card";
import CardDetails1 from "./card-details1";
import CardDetail2 from "./card-detail2";
import styles from "./Order.module.sass";
import useHandleConfig from "../../hooks/useConfig";
import { Button, IconButton } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import { useServer } from "../../server/server";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from "react";
import { Box, Text } from "native-base";
const Servico = (props) => {
  const { app, handleApp, handleService, service, config } = props
  const { createServico, getAccount } = useServer()
  const [user, setUser] = useState(null)





  const handleUser = async () => {

    const newUser = await getAccount()

    return newUser

  }




  const newService = () => {

    const data = {
      status: 'Pendente',
      service: service.id,
      user: handleUser.$id,
      date: '',
      time: '',
      origin: service.originPlace,
      destination: service.destinationPlace,
      distance: service.distance,
      price: service.valor,
      book: '',
      elevator: '',
      complemento: '',
      details: '',
      encodedRoute: service.encodedRoute,
      number: '',
      reference: '',
      monters: '',
      helpers: service.helpers,
      hours: service.hours,
    }

    createServico(data, handleUser.$id)



  }

  const { id } = service

  const createService = (data, step) => {
    handleService(data)
    handleApp({
      ...app,
      step: step
    })
  }

  const serviceId = config.find((item) => item.id == id)



  return (
    <div className={styles.servico}>

      <ServicesCard handleService={handleService} createService={createService} service={service} app={app} handleApp={handleApp} config={serviceId} />


      <Box w='100%' h={'50px'} backgroundColor={'red'}>
        <Text>teste</Text>
      </Box>





    </div>

  );
};

export default Servico;
