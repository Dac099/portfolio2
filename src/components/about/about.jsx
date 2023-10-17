import styles from './about.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';
import picture from '/picture.jpg';
import reactIcon from '/react.svg';

export function About(){
  const [ showContent, setShowContent ] = useState(false);
  const { currentCard, setCurrentCard } = useContext(ViewCardContext);

  return (
    <article 
      className={!showContent
        ? `${styles.card} ${styles.card_hidden}`
        : styles.card
      }
      onMouseEnter={() => {
        setShowContent(true);
        setCurrentCard('About');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent && currentCard === 'About' &&
        <section className={styles.main}>
          <h1 
            className={styles.main_title}
          >
            React <span>front-end</span> developer
          </h1>

          <div className={styles.container_center}>
            <div className={styles.main_images}>
              <img 
                src={picture}
                className={styles.picture}
              />
              <img 
                src={reactIcon}
                className={styles.react}
              />
            </div>
          </div>

          <p className={styles.description}>
            My name is <span className={styles.name}>David Ceja Zapata</span>, and I am a React Front-end developer. My focus is to create interfaces with the best development practices, as well as leaving a lasting impression. From responsive design to performance optimization.
          </p>
        </section>        
      }

      {!showContent && currentCard === null &&
        <p className={styles.hidden_title}>About</p>
      }
    </article>
  );
}