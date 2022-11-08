import React from "react";
import styles from "../styles/Card1.module.css";
import Image from "next/image";

function Card1({
  imagelink,
  title,
  subtitle,
  name,
  value,
  time,
  points,
  color,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          src={imagelink}
          width={40}
          style={
            {
              // background: "rgba(37, 181, 213, 0.1)",
              // filter: "blur(25px)",
            }
          }
        />
        <div className={styles.info}>
          <h1>{title}</h1>
          <span style={{ color: `${color}`, fontWeight: "500" }}>
            {subtitle}
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.b1}>
          <span>{name}</span>
          <div className={styles.values}>
            <span>{value}</span>
            <Image src={require("../assets/ether.png")} width={20} />
          </div>
        </div>
        <div className={styles.b2}>
          <span>{time}</span>
          <span
            style={{ color: "#19ED7B", fontWeight: "500", fontSize: "14px" }}
          >
            +{points}XP
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card1;
