import React from "react";
import { motion } from "framer-motion"; // Importa Framer Motion
import styles from "./About.module.css";
import { useTranslation } from "react-i18next"

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="sobre">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        {t("about.title1")}
      </motion.h2>

      <div className={styles.content}>
        {/* Imagem com animação */}
        <motion.img
          src="../../../assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        <ul className={styles.aboutItems}>
          {/* Item 1 */}
          <motion.li
            className={styles.aboutItem}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="../../../assets/about/uiIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title4")}</h3>
              <p>
              {t("about.text3")}
              </p>
            </div>
          </motion.li>

          {/* Item 2 */}
          <motion.li
            className={styles.aboutItem}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="../../../assets/about/cursorIcon.png" alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title2")}</h3>
              <p>
              {t("about.text1")}
              </p>
            </div>
          </motion.li>

          {/* Item 3 */}
          <motion.li
            className={styles.aboutItem}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="../../../assets/about/serverIcon.png" alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title3")}</h3>
              <p>
              {t("about.text2")}
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
