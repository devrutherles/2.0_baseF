import { Notifications } from '@mui/icons-material'
import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import styles from './CardNotification.module.sass'

const Page2 = (props) => {
  return (

      <div className={` ${styles['buttons01']} `}>
  <Chip className={` ${styles['buttons01']} `} deleteIcon={<FaceIcon />} onDelete={()=>{}} icon={<FaceIcon />} />

        </div>
   
  

  )
}

export default Page2
