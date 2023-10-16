import styles from './about.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';

export function About(){
  const [ showContent, setShowContent ] = useState(false);
  const { currentCard, setCurrentCard } = useContext(ViewCardContext);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => {
        setShowContent(true);
        setCurrentCard('About');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent &&
        <p>About</p>        
      }

      {!showContent && currentCard === null &&
        <p className={styles.hidden_title}>About</p>
      }
    </article>
  );
}