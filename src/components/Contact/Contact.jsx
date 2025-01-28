import React from 'react'
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next"

export const Contact = () => {
    const { t } = useTranslation();

  return (
    <footer id="contato" className={styles.container}>
        <div className={styles.text}>
            <h2>{t("contact.title1")}</h2>
            <p>{t("contact.text1")}</p>
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