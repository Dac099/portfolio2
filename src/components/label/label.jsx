import styles from './label.module.css';

export function Label({image, text, link, invert=false}){
  const color = invert ? '#e4e4e3' : '#16161a';
  const radius = invert ? '50%' : '0%';
  const cursor = link ? 'pointer' : 'default';

  return (
    <article 
      className={styles.label}
    >
      <p className={styles.label__text}>{text}</p>
      <a 
        href={link || "#"}
        className={styles.label__image}
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: color,
          borderRadius: radius,
          cursor: cursor
        }}
      ></a>
    </article>
  );
}