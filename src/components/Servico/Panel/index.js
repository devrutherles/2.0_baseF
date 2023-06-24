import Actions from "../../Actions";
import Icon from "../../Icon";
import React from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";

const Panel = ({ setVisiblePreview, setVisibleSchedule, PostServicos }) => {
  return (
    <div className={cn("panel", styles.panel, styles.hide)}>
      <div className={styles.btns}>
        <button
          onClick={() => {
            setVisibleSchedule(true);
            setVisiblePreview(true);
          }}
          className={cn("button-stroke", styles.button)}
        >
          Agendar
        </button>
        <button
          onClick={() => PostServicos()}
          className={cn("button", styles.button)}
        >
          Solicitar Agora
        </button>
      </div>
      <div className={styles.info}>
        <span>O pagamento sera feito após a conclusão do serviço</span>
      </div>
    </div>
  );
};

export default Panel;
