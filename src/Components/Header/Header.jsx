import React from "react";
import styles from "./header.module.css";

import logo from "../../assets/keep_image.png";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <img src={logo} alt="logo" />
      <h2>Keep</h2>
    </header>
  );
};

export default Header;
