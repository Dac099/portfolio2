import styles from './project.module.css';

export function ProjectCard({title, description, source, link, image}){
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
            className={styles.btn}
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            Link to
          </a>

          <a 
            className={source ? styles.btn : styles.unavailable_btn}
            href={source || '#'}
            target='_blank'
            rel='noreferrer'
          >
            {source ? 'Source code' : 'Unavailable'}
          </a>       
        </div>
      </section>

    </article>
  );
}