import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation(); // Hook para acessar traduções

  return (
    <section className={styles.container} id="projetos">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        {t("navbar.button1")}
      </motion.h2>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <motion.div
            key={id}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              delay: id * 0.2,
            }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
