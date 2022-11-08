import React from "react";
import styles from "../styles/Card2.module.css";
import Image from "next/image";

function Card2({ imageLink, time, name, quantity, price, gain }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image src={imageLink} width={250} height={250} />
        <span>{time}</span>
      </div>

      <div className={styles.info}>
        <h1>{name}</h1>

        <div className={styles.b1}>
          <span>Bought</span>
          <div className={styles.quantity_container}>
            <span>{quantity}</span>
            <Image src={require("../assets/ether.png")} width={20} />
          </div>
        </div>

        <div className={styles.b2}>
          <span>Floor</span>

          <div className={styles.price_container}>
            <div className={styles.quantity_container}>
              <span>{price}</span>
              <Image src={require("../assets/ether.png")} width={20} />
            </div>
            <span
              style={{ color: "#19ED7B", fontWeight: 500, fontSize: "14px" }}
            >
              +{gain}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
