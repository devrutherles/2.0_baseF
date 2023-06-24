import styles from './BtnGroup.module.sass' 
const ButtonGroup = () => (
    <div className={styles.mydict}>
      <div>
        <label className={styles.label}>
          <input type="radio" name="radio" defaultChecked="" />
          <span className={styles.span}>Enviar</span>
        </label>
    
        <label className={styles.label}>
          <input type="radio" name="radio" />
          <span className={styles.span}>Receber</span>
        </label>
      </div>
    </div>
  )

  export default ButtonGroup