import React from "react";
import styles from './CssTest1.module.css'
import img1 from './assets/image.png'

export default function CssTest1() {

    return (   
        <>
        <img src={img1}/>
        <div className={styles.test}>
            상자1
        </div>
        </>
    )
}