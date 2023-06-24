import React from "react";
import styles from "./List.module.sass";
import { ChevronRightOutlined } from "@mui/icons-material";
import Image from "../../components/Imagem";


export default function RenderRow(props) {

  const { icon, label, text , lestIcon} = props

  return (





     <div className={styles['container']}>


      <div className={styles['icon']}>
      <Image alt='' src={icon}/>
      </div>


      <div className={styles['contetn']}>
        <span className={styles['text']}>{label}</span>
        <span className={styles['text1']}>{text}</span>
       </div>


    { lestIcon && (  <div className={styles.button}>
        <ChevronRightOutlined />
      </div>)
      }

    </div>







  );
}
