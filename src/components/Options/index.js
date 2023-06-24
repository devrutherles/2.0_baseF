import Image from '../../Imagem'
import styles from './Opitions.module.sass'
const bik = require('../../images/bike.svg')
const truck = require('../../images/truck.svg')
const pick = require('../../images/pick.svg')

 const Options = (props) => {

  const {app,setApp,handleApp} = props

   return ( 

   <div className={styles["radio-inputs"]}>
      <label>
        <input onClick={(e)=>handleApp({selectService:e.target.id})} value='1' id='1' defaultChecked="1" className={styles["radio-input"]} type="radio" name="servico" />
        <span className={styles["radio-tile"]}>
          <span className={styles["radio-icon"]}>
          <Image width={20} height={20} alt='' src={pick} />
          </span>
          <span className={styles["radio-label"]}>Frete</span>
        </span>
      </label>
      <label>
        <input
  onClick={(e)=>handleApp({selectService:e.target.id})}
          className={styles["radio-input"]}
          type="radio"
          name="servico"
          value={2}
          id='2'
        />
        <span className={styles["radio-tile"]}>
          <span className={styles["radio-icon"]}>
          <Image width={20} height={20} alt='' src={truck} />
          </span>
          <span className={styles["radio-label"]}>Mudança</span>
        </span>
      </label>
      <label>
        <input  onClick={(e)=>handleApp({selectService:e.target.id})} id='3' value={3} className={styles["radio-input"]} type="radio" name="servico" />
        <span className={styles["radio-tile"]}>
          <span className={styles["radio-icon"]}>
          <Image width={20} height={20} alt='' src={bik} />
      
          </span>
          <span className={styles["radio-label"]}>Moto</span>
        </span>
      </label>
    </div>
    )
 }
  
  export default Options