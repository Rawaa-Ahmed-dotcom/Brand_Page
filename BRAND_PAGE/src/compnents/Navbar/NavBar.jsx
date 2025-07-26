import React from 'react'
import styles from "./Navbar.module.css";
import Logo from "../../assets/images/download.png";
export default function NavBar() {
  return (
    <>
      <nav>
        <div className = {styles.logo}>
            <img src = {Logo} alt = "logo"/>
        </div>
        <ul>
            <li><a href = "#">Menu</a></li>
            <li><a href = "#">Location</a></li>
            <li><a href = "#">About</a></li>
            <li><a href = "#">Contact</a></li>
        </ul>
        <button className = {styles.logIn}>Login</button>
      </nav>
    </>
  )
}
