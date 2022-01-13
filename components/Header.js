import React from "react";
import styles from '../styles/Header.module.css';
const Header = () => {
  return (
    <div>
   
      <span className={styles.header} onClick ={() => window.scroll(0,0) } style ={{textShadow :"5px 8px 8px #25272c" }} > News Now  </span>
  

    </div>
  );
};

export default Header;