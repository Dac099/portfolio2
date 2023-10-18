import styles from './card.module.css';

export function Card(props){
  return (
    <article className={styles.frame}>
      {props.children}
    </article>
  );
}