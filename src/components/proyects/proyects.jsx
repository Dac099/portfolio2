import styles from './proyects.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';

export function Proyects(){
  const [ showContent, setShowContent ] = useState(false);
  const { currentCard, setCurrentCard } = useContext(ViewCardContext);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => {
        setShowContent(true);
        setCurrentCard('Proyects');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent &&
        <p>Proyects</p>
      }

      {!showContent && currentCard === null &&      
        <p className={styles.hidden_title}>Proyects</p>
      }
    </article>
  );
}