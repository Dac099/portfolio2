import styles from './stack.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';
import reactIcon from '/react.svg';
import cssIcon from '/css-3.svg';
import firebaseIcon from '/firebase.svg';
import gitIcon from '/git-icon.svg';
import htmlIcon from '/html-5.svg';
import npmIcon from '/npm-icon.svg';
import tailwindIcon from '/tailwindcss-icon.svg';
import supabaseIcon from '/supabase-icon.svg';
import { TechnologyCard } from '../technologyCard/technologyCard';
import nodeIcon from '/nodejs-icon.svg';
import psqlIcon from '/postgresql.svg';
import expressIcon from '/express.svg';

export function Stack(){
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
        setCurrentCard('Stack');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent && currentCard === 'Stack' &&
        <section className={styles.container}>
          <h2 className={styles.main_title}>My main <span>Stack</span></h2>

          <p className={styles.description}>
            Currently I focus on front-end development using <span>React environment</span> technologies. The technologies I master for front-end development <i>( so far with 2+ years of experience)</i> are:
          </p>

          <section className={styles.technologies}>
            <TechnologyCard
              name={'React'}
              image={reactIcon}
            />
            
            <TechnologyCard
              name={'Tailwind CSS'}
              image={tailwindIcon}
            />

            <TechnologyCard
              name={'Firebase'}
              image={firebaseIcon}
            />

            <TechnologyCard
              name={'Supabase'}
              image={supabaseIcon}
            />

            <TechnologyCard
              name={'Git'}
              image={gitIcon}
            />

            <TechnologyCard
              name={'NPM'}
              image={npmIcon}
            />

            <TechnologyCard
              name={'HTML'}
              image={htmlIcon}
            />

            <TechnologyCard
              name={'CSS'}
              image={cssIcon}
            />

          </section>

          <p className={styles.description}>
            Although my focus is on front-end development, I also like to learn about technologies that complement my knowledge for application development.
          </p>

          <section className={styles.technologies}>
            <TechnologyCard
              name={'PostgreSQL'}
              image={psqlIcon}
            />

            <TechnologyCard
              name={'NodeJS'}
              image={nodeIcon}
            />

            <TechnologyCard
              name={'Express'}
              image={expressIcon}
            />
          </section>
        </section>
      }

      {!showContent && currentCard === null &&
        <p className={styles.hidden_title}>Stack</p>
      }
    </article>
  );
}