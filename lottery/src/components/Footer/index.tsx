import React from "react";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {`Lottery`} &#xa9; {`${new Date().getFullYear()}`}
    </div>
  );
};

export default Footer;
