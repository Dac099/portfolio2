import styles from './contact.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';

export function Contact(){
  const [ showContent, setShowContent ] = useState(false);
  const { currentCard, setCurrentCard } = useContext(ViewCardContext);

  return (
    <article 
      className={showContent
        ? styles.card
        : `${styles.card} ${styles.card_hidden}`
      }
      onMouseEnter={() => {
        setShowContent(true);
        setCurrentCard('Contact');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent && currentCard == 'Contact' &&
        <section className={styles.container}>
          <h2 
            className={styles.main_title}
          >
            Contact <span>me</span>
          </h2>

          <div className={styles.content}>
            <div>
              <p className={styles.text}>
                You can find me here
              </p>

                <nav className={styles.contact}>
                  <ul>
                    <li> 
                      <a 
                        href="https://www.linkedin.com/in/david-ceja-zapata/"
                        target='_blank'
                        rel={'noreferrer'}
                      >LinkedIn
                      </a> 
                    </li>
                    
                    <li> 
                      <a 
                        href="https://github.com/Dac099"
                        target='_blank'
                        rel={'noreferrer'}
                      >GitHub
                      </a> 
                    </li>
                    
                    <li> 
                      <a 
                        href="https://twitter.com/David_CA990"
                        target='_blank'
                        rel={'noreferrer'}
                      >Twitter
                      </a> 
                    </li>
                  </ul>
                </nav>
            </div>

            <div>
              <p className={styles.text}>
                Also, you can download my CV
              </p>

              <a 
                href="https://drive.google.com/file/d/1v6ka4eSpZ9odvTgXvzC78QbvhJXup0UX/view?usp=drive_link"
                className={styles.cv}
                target='_blank'
                rel={'noreferrer'}
              ></a>
            </div>

          </div>
        </section>
      }

      {!showContent && currentCard === null &&
        <p className={styles.hidden_title}>Contact</p>
      }
    </article>
  );
}