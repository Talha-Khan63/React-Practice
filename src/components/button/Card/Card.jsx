import React from 'react'
import styles from "./Card.module.css"

const Card = ({imgSrc,title,desc}) => {
  return (
    <div className= {styles.divContainer}>
        <img className={styles.imag} src={imgSrc}  />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Card