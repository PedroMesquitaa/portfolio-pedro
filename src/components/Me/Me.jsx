import { motion } from "framer-motion"; // Importa Framer Motion
import React from "react";
import styles from "./Me.module.css";
import { useTranslation } from "react-i18next"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Me = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Título com animação */}
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className={styles.title}
        >
          {t("me.title1")}
        </motion.h1>
        
        {/* Descrição com animação */}
        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className={styles.description}
        >
          {t("me.text")}
        </motion.p>
        
        {/* Botão para download do CV com animação */}
        <motion.a
          variants={container(1)}
          initial="hidden"
          animate="visible"
          href="../../../public/Cv/CV Pedro Henrique Mesquita Patelli.pdf"
          className={styles.cvBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("me.button1")}
        </motion.a>
      </div>

      {/* Imagem com animação */}
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        src="../../../assets/me/eu.png"
        alt="Pedro Mesquita"
        className={styles.meImg}
      />

      {/* Blurs decorativos */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
