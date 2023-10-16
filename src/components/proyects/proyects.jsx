import styles from './proyects.module.css';
import { useState } from 'react';

export function Proyects(){
  const [ showContent, setShowContent ] = useState(false);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {showContent
        ? <p>Proyects</p>
        : <p className={styles.hidden_title}>Proyects</p>
      }
    </article>
  );
}