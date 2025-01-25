import React from "react";
import styles from "./Me.module.css";

export const Me = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Oi, sou o Pedro</h1>
                <p className={styles.description}>Sou programador full-stack usando React e NodeJS.
                    Entre em contato se quiser saber mais!
                </p>
                
                <a href="mailto:pedrozd45@gmail.com" className={styles.contactBtn}>Contate-me</a>
            </div>

            <img src="../../../assets/me/eu.png" alt="Pedro Mesquita"  className={styles.meImg} />

            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );    
};