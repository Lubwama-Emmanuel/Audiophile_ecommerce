import styles from "./Zx9.module.scss";
import Image from "next/image";
import Button from "../../ui/Buttons/Button";

export default function Zx9() {
  return (
    <div className={styles.zx9}>
      <div className={styles.zx9__image}>
        <Image
          src="/images/big_speaker.png"
          width={300}
          height={300}
          className={styles.zx9__image_img}
        />
      </div>
      <div className={styles.zx9__info}>
        <h2>zx9 speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button bgColor={"#000"} color={"#fff"}>
          {"see product"}
        </Button>
      </div>
    </div>
  );
}
