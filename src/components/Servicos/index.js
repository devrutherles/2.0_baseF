import Image from "../../Imagem";
import styles from "./CardShipment.module.sass";

export const CardShipment = ({ ...props }) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image
            width={70}
            height={70}
            alt=""
            src={"/assets/images/image-freteme-truck.png"}
          />
          <span>Frete</span>
        </div>
      </div>
    </div>
  );
};

export default CardShipment;
