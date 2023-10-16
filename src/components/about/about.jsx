import styles from './about.module.css';
import { useState } from 'react';

export function About(){
  const [ showContent, setShowContent ] = useState(false);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {showContent
        ? <p>About</p>
        : <p className={styles.hidden_title}>About</p>
      }
    </article>
  );
}