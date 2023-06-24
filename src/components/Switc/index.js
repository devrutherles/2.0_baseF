import React from 'react'
import styles from './Switch.module.sass'


const Swithc = (props) => {
    const { label } = props
    return (


        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>

    );

}

export default Swithc