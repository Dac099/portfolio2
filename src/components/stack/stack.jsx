import styles from './stack.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';

export function Stack(){
  const [ showContent, setShowContent ] = useState(false);
  const { currentCard, setCurrentCard } = useContext(ViewCardContext);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => {
        setShowContent(true);
        setCurrentCard('Stack');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent &&
        <p>Stack</p>
      }

      {!showContent && currentCard === null &&
        <p className={styles.hidden_title}>Stack</p>
      }
    </article>
  );
}