import React from 'react'
import styles from "./Herobanner.module.css";
import flibKart from "../../assets/images/flipkart.png";
import amazon from "../../assets/images/amazon.png";
import ShoesImage from "../../assets/images/shoe_image.png";
export default function HeroBanner() {
  return (
    <div className = {styles.heroBanner}>
        <div className = {styles.infoSection}>
      <h1>Your feet<br/>desrve<br/>the best</h1>
      <p className= {styles.description}>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className = {styles.options}>
        <button className= {styles.shop}>Shop Now</button>
        <button className= {styles.category}>Category</button>
      </div>
      <p className= {styles.availability}>Also Available On</p>
      <img src = {flibKart}/>
      <img src = {amazon}/>
    </div>
    <div className = {styles.imageSection}>
        <img src = {ShoesImage}/>
    </div>
    </div>
  )
}
