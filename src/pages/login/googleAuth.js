import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { loginUsingGoogle } from "../../service/auth";
import Image from "@/components/Imagem";

const Google = () => {
  return (
    <div className={styles.btns}>
      <button
        style={{ marginTop: 3 }}
        onClick={() => loginUsingGoogle()}
        className={cn("button-stroke")}
      >
        <Image src={require('../../../public/images/content/google.svg')} alt="Google" />
        Google
      </button>
    </div>
  );
};
export default Google;
