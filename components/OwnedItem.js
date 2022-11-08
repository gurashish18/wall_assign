import React from "react";
import styles from "../styles/OwnedItem.module.css";

function OwnedItem({ type, quantity }) {
  return (
    <div className={styles.container}>
      <span>{`${type}`}</span>
      <span>{`${quantity}%`}</span>
    </div>
  );
}

export default OwnedItem;
