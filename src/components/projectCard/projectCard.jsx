import styles from './projectCard.module.css';
import { useState } from 'react';

export function ProjectCard({name, description, link, code, img}){

  return (
    <article className={styles.card}>
      <img src={img} className={styles.image} />

      <div>
        <p className={styles.project_title}>{name}</p>
        <p className={styles.projects_description}>{description}</p>
      </div>

      <div className={styles.btns}>
        <a href={link} target='_blank' rel='noreferrer' className={styles.btn}>View proyect</a>
        <a 
          className={!code ? styles.unavailable : styles.btn}
          href={code} 
          target='_blank' 
          rel='noreferrer' 
        >
          {code ? 'Source code' : 'Not available'}
        </a>
      </div>
    </article>
  );
}