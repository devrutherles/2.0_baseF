import React from "react";
import styles from "./Card.module.sass";
import { IconButton } from "@mui/material";
import { LocationDisabledOutlined } from "@mui/icons-material";
import cn from "classnames";

export default function CadTop() {
  return (
    <div className={styles.top_card2}>
      <div className={styles.header2}>
        <div className={styles.icon2}>
          <IconButton color="#ff" sx={{ width: 30, height: 30, color: "#fff" }}>
            <LocationDisabledOutlined
              color="#ff"
              sx={{ width: 30, height: 30, color: "#fff" }}
            />
          </IconButton>
        </div>

        <div className={styles.title2}>Por favor habilite a Localização</div>
      </div>

      <div className={styles.box_card_content}>
        <div className={styles.title2}>
          <button className={cn("button-white", styles.button2)}>
            Ou inserira manualmente
          </button>
        </div>
      </div>
    </div>
  );
}
