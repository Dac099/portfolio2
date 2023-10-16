import styles from './contact.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';

export function Contact(){
  const [ showContent, setShowContent ] = useState(false);
  const { currentCard, setCurrentCard } = useContext(ViewCardContext);

  return (
    <article 
      className={styles.card}
      onMouseEnter={() => {
        setShowContent(true);
        setCurrentCard('Contacts');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent &&
        <p>Contact</p>
      }

      {!showContent && currentCard === null &&
        <p className={styles.hidden_title}>Contact</p>
      }
    </article>
  );
}