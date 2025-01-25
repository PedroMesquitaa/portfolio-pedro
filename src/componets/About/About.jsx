import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="sobre">
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>
                <img src="../../../assets/about/aboutImage.png" alt="Me sitting with a laptop" className={styles.aboutImage} />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/cursorIcon.png" alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedor Frontend</h3>
                            <p>Sou um desenvolvedor frontend com experiência em criar sites responsivos e o otimizados</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src="../../../assets/about/serverIcon.png" alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedor Backend</h3>
                            <p>Tenho experiência em desenvolver sistemas back-end rápidos e otimizados e APIs</p>
                        </div>
                    </li>
                </ul>
            </div>           
        </section>
    );
};