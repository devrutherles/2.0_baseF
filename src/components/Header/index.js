import React from "react";
import styles from "./Header.module.sass";
import Icons from "../Icons";
import Menu from "@/components/Menu";
import { h } from "baseui/header-navigation";


export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <Menu styles={styles.icon} />
      </div>
    </div>
  );
}
