import React from 'react'
import Head from 'next/head'
import styles from './style.module.sass'
import Service from './Service'

const Frame28 = (props) => {

  const { config, handleService, service } = props


  return (
    <>

        <Service config={config} handleService={handleService} service={service} ></Service>
 

    </>
  )
}

export default Frame28
