import styles from './stack.module.css';
import { useState } from 'react';

export function Stack(){
  const [ showContent, setShowContent ] = useState(false);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {showContent
        ? <p>Stack</p>
        : <p className={styles.hidden_title}>Stack</p>
      }
    </article>
  );
}