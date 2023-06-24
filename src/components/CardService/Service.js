import { Add, PhoneOutlined, Remove, RemoveCircleOutline, RingVolumeTwoTone, Timelapse, TimeToLeaveOutlined } from '@mui/icons-material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Button, Chip, IconButton, Stack } from '@mui/material'
import Box from '@mui/material/Box'
const payIcon = require('../../images/payIcon.svg')

import { configureStore } from '@reduxjs/toolkit'
import cn from 'classnames'
import { default as Image, default as img } from '../../Imagem'
import React, { useState, useEffect } from 'react'
import styles from './Service.module.sass'
import ButtonGroup from '../../components/ButtonGroup'

import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import Opitions from '../Options'
import { formatPrice, maskBrazilianPhone, phoneMask } from '@/utils'

import Switc from '../Switc'
import { setApp } from '@/context/appSlice'
import { useCallback } from 'react'
const Service = (props) => {


  const { config, handleService, service, app, handleApp,
  } = props

  const { distance } = service;
  const { selectService } = app
  const id = selectService

  const [helpers, setHelpers] = useState()
  const [hours, setHours] = useState()


  const [services, setServices] = useState()




  useEffect(() => {
    let job = config.find((item) => item.id == id)
    setServices(job)


  }, [id])











  const valor = (id, value_km, value_base, value_helpers, value_hours) => {

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



  const [tel, setTel] = useState("")







  useEffect(() => {
    if (hours && helpers) return
    setHelpers(services?.helpers)
    setHours(services?.hours)

  }, [services])



  function updateService(
    id,
    servico,
    image,
    image2,
    preco,
    helpers,
    hours,
    value_helpers,
    value_hours,

  ) {

    handleService({
      id,
      servico,
      image,
      image2,
      value: preco,
      preco: preco,
      helpers,
      hours,
      value_helpers,
      value_hours,
    });

  }


  const handleTel = (tel) => {
    const newTeL = phoneMask(tel)
    setTel(newTeL)
  }



  const incrementHel = () => {
    if (helpers < 10) {


      setHelpers(helpers + 1)






    }
  };

  const incrementHou = () => {
    if (hours < 10) {


      setHours(hours + 1)





    }
  };

  const decrementHel = () => {

    if (helpers > 0) {

      setHelpers(helpers - 1)

    }



  };


  const decrementHou = () => {
    if (hours > 0) {

      setHours(hours - 1)

    }



  };

  return (
    <div className={styles['container']}>

      <div className={styles['header']}>
        <Opitions handleApp={handleApp} setApp={setApp} app={app} />
      </div>
      <div className={styles['img-container']}>
        <img
          alt={props.imageService_alt}
          src={services?.image2}
          className={styles['image-service']}
        />
      </div>
      <div className={styles['price-container']}>
        <div className={styles['coll']}>
          <div className={styles['roll']}>
            <h3>{'Ajudantes'}</h3>
            <h3>{helpers}</h3>

            <PersonOutlineOutlinedIcon />
          </div>
          <div className={styles['roll1']}>
            <span>{formatPrice(valor(id, services?.value_km, services?.value_base, services?.value_helpers, services?.value_hours))}</span>
          </div>
        </div>

        <div className={styles["containerBotton"]}>
          <button onClick={() => decrementHel()} className={cn(styles["frame281-button1"], 'button-small')}>
            <Remove />

          </button>
          <div className={styles["frame281-frame41"]}>
            <div className={styles["frame281-frame33"]}>
              <span className={styles["frame281-text20"]}>{helpers}</span>

            </div>
          </div>
          <button onClick={() => incrementHel()} className={cn(styles["frame281-button1"], 'button-small')}>
            <Add />
          </button>
        </div>



      </div>

      {id != 2 && (
        <div className={styles.btnGroup}>
          <ButtonGroup />
        </div>
      )}

      {id == 3 && (<div className={styles['container3']}>
        <div className={styles['frame20']}>
          <MoreTimeIcon />
          <span>{hours} Hora</span>
        </div>


        <div className={styles["containerBotton"]}>
          <button onClick={() => decrementHou()} className={cn(styles["frame281-button1"], 'button-small')}>
            <Remove />

          </button>
          <div className={styles["frame281-frame41"]}>
            <div className={styles["frame281-frame33"]}>
              <span className={styles["frame281-text20"]}>{hours}</span>

            </div>
          </div>
          <button onClick={() => incrementHou()} className={cn(styles["frame281-button1"], 'button-small')}>
            <Add />
          </button>
        </div>
      </div>)}

      <div className={styles.tel}>
        <PhoneOutlined />
        <input maxLength={15} placeholder='Telefone' value={tel} type={'text'} onChange={(e) => handleTel(e.target.value)} />

      </div>

      <div className={styles.pay}>
        <Image width={24} height={24} alt='' src={payIcon} />
        <span>Pagamento após o serviço</span>
        <input maxLength={15} placeholder='Telefone' value={tel} type={'radio'} onChange={(e) => handleTel(e.target.value)} />

      </div>


      <div className={styles['container4']}>
        <Button variant="contained" className={cn(styles["solicitar"])} > Solicitar </Button>
        <Chip
          sx={{
            height: '100%',
            width: '25%',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
          }}


          icon={<EventAvailableOutlinedIcon />} label="Agendar" />
      </div>
    </div>


  )
}

Service.defaultProps = {
  title1: 'Heading',
  imageService_src: 'config[0]?.image2',
  imageService_alt: 'TukTuk1401',
  heading: 'Heading',
  text: '2',
  text1: 'R$ 500\n',
  Capa1_src: '/capa11402-wz7e.svg',
  Capa1_alt: 'Capa11402',
  Base_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4c9aa8ae-fab7-40cf-9a1b-c8ecff6df573/bc6e9be3-d2ff-4a8e-8ea2-50b6539a4b4b?org_if_sml=1112',
  Base_alt: 'BaseI140',
  heading1: 'Heading',
  text2: 'Choose Rickshaw',
}



export default Service

