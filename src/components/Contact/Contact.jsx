import React from 'react'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contato" className={styles.container}>
        <div className={styles.text}>
            <h2>Contato</h2>
            <p>Sinta-se à vontade para entrar em contato!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="../../../assets/contact/emailIcon.png" alt="Email" />
                <a href="mailto:pedrozd45@gmail.com"> pedrozd45@gmail.com</a>
            </li>

            <li className={styles.link}>
            <img src="../../../assets/contact/linkedinIcon.png" alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/pedro-mesquita2/" target="_blank"
                    rel="noreferrer"> linkedin.com/in/pedro-mesquita2</a>
            </li>

            <li className={styles.link}>
                <img src="../../../assets/contact/githubIcon.png" alt="GitHub" />
                <a href="https://github.com/PedroMesquitaa" target="_blank"
                 rel="noreferrer"> github.com/PedroMesquitaa</a>
            </li>
        </ul>
    </footer>
  );
};