// Toast.js
import React from "react";
import styles from "./Toast.module.css"; // Create a CSS file for styles

const Toast = ({ message }) => {
  return (
    <div className={styles.toast}>
      {message}
    </div>
  );
};

export default Toast;
