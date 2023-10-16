import styles from './contact.module.css';
import { useState } from 'react';

export function Contact(){
  const [ showContent, setShowContent ] = useState(false);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {showContent
        ? <p>Contact</p>
        : <p className={styles.hidden_title}>Contact</p>
      }
    </article>
  );
}