import styles from "./card-details1.module.sass";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewSelect from '../NewSelect'
const CardDetail2 = (props) => {

  const { service, app, handleApp, handleService } = props
  const handleHel = (event, newData) => {
    event.preventDefault()


    handleService({
      helpers: newData
    })






  };


  const handleHor = (event, newData) => {
    event.preventDefault()



    handleService({
      hours: newData
    })





  };




  return (


    <div className={styles.card_details}>




      {service.id != 3 && (
        <div className={styles.row_details}>

          <NewSelect onChange={handleHel} label={'Ajudantes'} number={service.helpers} Icon={PeopleAltOutlinedIcon} />
          {service.id == 2 && (<NewSelect onChange={handleHor} number={3} label={'horas'} Icon={AccessTimeIcon} />)}

        </div>)}



      {
        /*
               <div className={styles.location}>
                 <div className={styles.location_content}>
                   <div className={styles.icon}>
       
                     <Image width={30} height={80} alt='' src={require('../../images/location.svg')} />
       
                   </div>
       
                   <div className={styles.location_destination}>
       
                     <input type={'text'} value="rua maria de belem" />
                     <input type={'text'} value="rua maria de belem" />
                   </div>
       
                   <div className={styles.location_destination}>
       
                     <button>editar</button>
                     <button>editar</button>
                   </div>
       
       
       
                 </div>
       
       
               </div>
             */

      }

    </div>
  );
};

export default CardDetail2;
