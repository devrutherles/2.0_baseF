import React from "react";
import styles from "./List.module.sass";
import Image from "../../components/Imagem";


export default function RenderRow(props) {

  const { suggestion, handleSetOrigem, index, icon } = props

  if (!suggestion) return ;
  



  const neighborhood =
    suggestion?.properties?.context?.neighborhood?.name + " "
   || "";
  const place =
    suggestion?.properties?.context?.place?.name + " " || "";
  const region =
    suggestion?.properties?.context?.region?.name ||
    "Endereço não encontrado";

  return (





    <div onClick={()=>handleSetOrigem(suggestion)} className={styles['container']}>


      <div className={styles['icon']}>
        <Image alt="" src={icon} />
      </div>


      <div className={styles['contetn']}>


        <span className={styles['text']}>{suggestion?.properties?.name || "Endereço inválido"}</span>
        <span className={styles['text1']}>{
          neighborhood != "undefined "
            ? neighborhood
            : "" + place != "undefined "
              ? place
              : "" + region != "undefined "
                ? region
                : ""
        }</span>

      </div>
    </div>









  );
}
