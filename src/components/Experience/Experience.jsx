import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { useTranslation } from "react-i18next";

export const Experience = () => {
    const { t } = useTranslation(); // Hook para acessar traduções
    const history = t("experience.history", { returnObjects: true }); // Busca o array de experiências traduzidas
    const skillVariants = (delay) => ({
        initial: { y: -10, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    });

    const historyVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <section className={styles.container} id="experiencia">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={styles.title}>
                {t("experience.title1")}
            </motion.h2>

            <div className={styles.content}>
                {/* Skills Section */}
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <motion.div
                            key={id}
                            variants={skillVariants(id * 0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className={styles.skill}
                            style={{ "--index": id }}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </motion.div>
                    ))}
                </div>

                {/* History Section */}
                <ul className={styles.history}>
                    {history.map((historyItem, id) => (
                        <motion.li
                            key={id}
                            variants={historyVariants}
                            initial="initial"
                            whileInView="animate"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                            }}
                            viewport={{ once: true }}
                            className={styles.historyItem}>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => (
                                        <li key={id}>{experience}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
