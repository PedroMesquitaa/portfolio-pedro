import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ 
  project: { title, imageSrc, description, skills, demo, source, details }, 
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.container}>
        {/* Frente do Card */}
        <div className={styles.cardFront}>
          <img src={imageSrc} alt={title} className={styles.image} />
          <h3 className={styles.title}>{title}</h3>
          
        </div>

        {/* Verso do Card */}
        <div className={styles.cardBack}>
        <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, skillId) => (
              <li key={skillId} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Demo
              </a>
            )}
            <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Repo
            </a>
          </div>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};
