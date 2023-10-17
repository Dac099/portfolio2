import styles from './technologyCard.module.css';

export function TechnologyCard({image, name}){
  return(
    <article className={styles.card}>
      <img 
        src={image}
        className={styles.card_img}
      />

      <p className={styles.card_title}>{name}</p>
    </article>
  );
}