import { Add, HomeTwoTone, Remove } from "@mui/icons-material";
import React, { memo, useState } from "react";
import styles from "./card-detail2.module.sass";
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import { Button, Divider, FormControlLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ArrowLeft } from "@mui/icons-material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Image from "../../components/Imagem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Textarea } from "@mui/joy";
import { phoneMask } from "../../utils";
const CardDetail2 = (props) => {
  const [home, setHome] = React.useState('')
  const [andar,setAndar] = React.useState()
  const [tel,setTel] = useState('')

  const handleTel = (data) =>{

    const  newTel =  phoneMask(data)

    setTel(newTel)

  }


  return (





    <div className={styles.card_details}>





        <div className={styles.row_details}>
          <div className={styles.icon}>
            <HomeOutlinedIcon />
          </div>
          <div className={styles.label}>

            {home != 'ap' && (
              <>
                <input onClick={(e) => setHome(e.target.id)} type='radio' id='casa' name='home' />
                <label htmlFor="casa">Casa</label>
              </>
            )}
            <input type='radio' id='ap' onClick={(e) => setHome(e.target.id)} name='home' />
            <label htmlFor="ap">Apartamento</label>

            {
              home == 'ap' && (
                <>
                  <input type='checkbox' id='elevador' value={'elevador'} name='elevador' />
                  <label htmlFor="elevador">Elevador</label>

                  <input onChange={(e)=>setAndar(e.target.value)} placeholder="andar" type='number' maxLength={3}  value={andar}  />
                </>
              )
            }



          </div>

          <div className={styles.icon}>
            <IconButton onClick={()=> setHome("")}>
            <CancelOutlinedIcon sx={{color:"gray" , width:18 , height:18}} />
            </IconButton>
          </div>

        </div>


        <div className={styles.row_details}>
          <div className={styles.icon}>
            <CallOutlinedIcon


            />
          </div>
          <div className={styles.label}>
            <input value={tel} maxLength={15} onChange={(e)=> handleTel(e.target.value)} type={'text'} placeholder={'Telefone'} />
          </div>
    
        </div>

        <div className={styles.row_details}>
      


          <Textarea
  color="neutral"
  disabled={false}
  minRows={2}
  placeholder="Descreva os itens ..."
  variant="plain"
  sx={{
    fontSize:'14px',
    fontWeight: 400,
    width:'100%',
    height:'100%',
    color: '#606060',
    fontFamily: "IBM Plex Sans"

  }}
/>
          
    
        </div>


      </div>


  );
};

export default CardDetail2;
