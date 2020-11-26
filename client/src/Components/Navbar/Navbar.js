import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {Logout} from '../Logout/Logout'
function Navbar(props) {
  const user = localStorage.getItem('name')
  const [auth, setAuth] = useState(user)

  const logoutClick = () => {
    localStorage.clear();
    window.location.replace('/')
  };
  useEffect(()=>{
    if (user) setAuth(true)
    else setAuth(false)
  },[user])
  return (
    <div className={styles.navbarContainer}>
      {auth? <div className={styles.navbarItem}><Link to="/district">Home</Link></div>:null}
     {!auth? <div className={styles.navbarItem}><Link to="/login"> Sign in</Link></div>:null}
     {auth?<div className={styles.navbarItem}><Link to="/account"> Account</Link></div>:null}
     {auth?<div className={styles.navbarItem}><Link to="/blog"> Blog</Link></div>:null}

     {auth?
            <div className={styles.navbarItem}><Link to="/" onClick={logoutClick}>Logout</Link></div>
        :
            <div className={styles.navbarItem}><Link to="/">Registration</Link></div>
      }
     
     </div>
  );
}

export default Navbar;
