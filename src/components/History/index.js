import React from "react";
import styles from "./List.module.sass";
import { ChevronRightOutlined } from "@mui/icons-material";
import Image from "../../components/Imagem";


export default function RenderRow(props) {
  const { icon, label, text, lestIcon, handleService, locationInput, setLocationInput, service } = props

  const history = JSON.parse(localStorage.getItem('history')) || false


  console.log(locationInput)




  return (


    <>

      {history && history?.map((item) =>




        <div onClick={() => {
          if (!history) return


          handleService({
            ...service,
            originPlace: item.place,
            origin: item.location,
            type: 'origin'
          })

          setLocationInput({
            ...locationInput,
            valueOrigin: item.place

          })
        }









        } className={styles['container']}>


          <div className={styles['icon']}>
            <Image alt='' src={icon} />
          </div>


          <div className={styles['contetn']}>
            <span className={styles['text']}>{item.place || label}</span>
            <span className={styles['text1']}>{'historico'}</span>
          </div>


          {lestIcon && (<div className={styles.button}>
            <ChevronRightOutlined />
          </div>)
          }

        </div>



      )



      }


    </>
  );
}
