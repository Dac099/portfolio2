import styles from './label.module.css';

export function Label({image, text, link}){
  return (
    <article 
      className={styles.label}
    >
      <p className={styles.label__text}>{text}</p>
      <a 
        href={link || "#"}
        className={styles.label__image}
        style={{
          backgroundImage: `url(/public/${image})`
        }}
      ></a>
    </article>
  );
}