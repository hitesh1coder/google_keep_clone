import React, { useContext } from "react";
import styles from "./header.module.css";

import logo from "../../assets/keep_image.png";
import NoteContext from "../../Context/NotesContext";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(NoteContext);

  return (
    <header className={styles.header_container}>
      <img src={logo} alt="logo" />
      <h2>Keep</h2>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search Note..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
};

export default Header;
