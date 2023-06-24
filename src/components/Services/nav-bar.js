import { memo } from "react";
import styles from "./nav-bar.module.sass";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Nav from '../Nav'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from "@mui/material";
const NavBar = memo(() => {
  return (

  
      <div className={styles.content}>
      <IconButton>
        <KeyboardArrowLeftIcon />
      </IconButton>
        <div className={styles.nav}>
          <input id='1' name='servico' type='radio' />
          <label htmlFor="1">Frete</label> 
        </div>
        <div className={styles.nav}>
          <input id='2' name='servico' type='radio'  />
          <label htmlFor="2">Mudança</label>
          
        </div>
        <div className={styles.nav}>
        <input id='3' name='servico' type='radio'  />
          <label htmlFor="3">Moto</label>
        </div>

        <IconButton>
        <ChevronRightIcon/>
      </IconButton>
      </div>

   
  );
});

export default NavBar;
