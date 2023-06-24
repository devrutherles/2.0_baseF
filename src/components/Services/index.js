import NavBar from "./nav-bar";
import ServicesCard from "./services-card";
import CardDetails1 from "./card-details1";
import CardDetail2 from "./card-detail2";
import styles from "./Service.module.sass";
import useHandleConfig from "../../hooks/useConfig";
import { Button, IconButton } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Servico = (props) => {

  const {app , handleApp , handleService , service ,config} = props
  
  const createService = (data,step) =>{
    handleService(data);
    handleApp({
      ...app,
      step: step
    })
  }  
  


  return (
    <div className={styles.servico}>





   

        {config.map((item, key) =>

            <ServicesCard createService={createService} app={app} service={service} handleApp={handleApp} handleService={handleService} config={item} key={key} />



        )}



      <div className={styles.footer}>

        <div className={styles.content}>
        
         <IconButton onClick={()=> handleApp(
          {
          ...app,
          step: 1
        })}>
          <KeyboardBackspaceIcon/>
          </IconButton>

        </div>

        <div className={styles.button}>
          <Button>Escolha o serviço</Button>
        </div>

      </div>

    </div>

  );
};

export default Servico;
