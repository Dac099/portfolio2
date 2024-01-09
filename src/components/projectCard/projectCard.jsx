import styles from './project.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languajeContext';

export function ProjectCard({title, description, source, link, image}){
  const { lang } = useContext(LanguageContext);
  const unavailable = lang === 'en' ? 'Unavailable' : 'Inaccesible';
  const sourCode = lang === 'en' ? 'Source Code' : 'Código';

  return (
    <article className={styles.project}>
      <p className={styles.project__title}>{title}</p>

      <section className={styles.project__main}>
        <img
          src={image}
          className={styles.project__image}
        >
        </img>
        
        <p className={styles.project__description}>{description}</p>

        <div className={styles.buttons}>
          <a 
            className={link ? styles.btn : styles.unavailable_btn}
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            {link ? 'Link' : unavailable}
          </a>

          <a 
            className={source ? styles.btn : styles.unavailable_btn}
            href={source}
            target='_blank'
            rel='noreferrer'
          >
            {source ? sourCode : unavailable}
          </a>       
        </div>
      </section>

    </article>
  );
}