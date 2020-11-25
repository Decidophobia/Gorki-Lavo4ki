import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
//распишем все линки на страницы, пока только на рут

function Navbar(props) {
  const user = localStorage.getItem('name')
  console.log(user);
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarItem}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.navbarItem}>
        <Link to="/District">District</Link>
      </div>
      <div className={styles.navbarItem}>
        <Link to="/login"> Sign in</Link>
      </div>
      <div className={styles.navbarItem}>
        <Link to="/account"> Account</Link>
      </div>
      {user?<div className={styles.navbarItem}><Link to="/blog"> Blog</Link></div>:null}
    </div>
  );
}

export default Navbar;
