import React from 'react';
import styles from './Tables.module.sass';




export default function Tables({handleApp,app}) {

  const handleStep = (step) =>{

    handleApp(
      {

        step:step

      }
    )
  }
  return (
    <div className={styles.container}>
    <div className={styles.tabs}>
      <input onChange={(e)=> handleStep(e.target.id)} type="radio" id="1" name="tabs" defaultChecked="1" />
      <label className={styles.tab} htmlFor="1">
        Local
      </label>
      <input onChange={(e)=> handleStep(e.target.id)} type="radio" id="2" name="tabs" />
      <label className={styles.tab} htmlFor="2">
        Serviço
      </label>
      <input onChange={(e)=> handleStep(e.target.id)} type="radio" id="3" name="tabs" />
      <label className={styles.tab} htmlFor="3">
        Detalhes
      </label>
      <span className={styles.glider} />
    </div>
  </div>
  
  );
}
