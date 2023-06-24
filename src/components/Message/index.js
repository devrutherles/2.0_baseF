import React from "react";
import styles from "./List.module.sass";
import Icon from "../Icons";
import { ListItem, ListItemLabel, MenuAdapter, ARTWORK_SIZES } from "baseui/list";
import { Check, ChevronRight } from "baseui/icon";
import { StatefulMenu } from 'baseui/menu';
import { ChevronRightOutlined, PinDropTwoTone } from "@mui/icons-material";
import Image from "../../Imagem";


export default function RenderRow(props) {

  const { icon, label, text } = props

  return (





     <div className={styles['container']}>


      <div className={styles['icon']}>
      <Image src={icon}/>
      </div>


      <div className={styles['contetn']}>
        <span className={styles['text']}>{label}</span>
        <span className={styles['text1']}>{text}</span>
       </div>


      <div className={styles.button}>
        <ChevronRightOutlined />
      </div>

    </div>







  );
}
