import styles from './proyects.module.css';
import { useState, useContext } from 'react';
import { ViewCardContext } from '../../context/viewCard';
import { ProjectCard } from '../projectCard/projectCard';
import webImg from '/webImg.png'

export function Proyects(){
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
        setCurrentCard('Proyects');
      }}
      onMouseLeave={() => {
        setShowContent(false);
        setCurrentCard(null);
      }}
    >
      {showContent && currentCard === 'Proyects' && 
        <section>
          <h2 
            className={styles.main_title}
          >
            Some of my <span>projects</span>
          </h2>

          <div className={styles.container}>
            <ProjectCard 
              name={'DateAndRate'}
              description={'Web app that allows you connect with people and create groups with common activities.'}
              img={webImg}
              link={'https://dateandratelanding.netlify.app/'}
              code={'https://github.com/Dac099/dates_app.git'}
            />

            <ProjectCard 
              name={'School Administrator'}
              description={'System web for Algorithmics Metepec (programming school), to manage lessons, instructors, and days off.'}
              img={webImg}
              link={'https://chimerical-jalebi-f6a9d1.netlify.app/'}
              code={'https://github.com/Dac099/schedule_algortihmics'}
            />

            <ProjectCard 
              name={'JSON consumer'}
              description={'Web to consume the JSON placeholder API. The web works as an administrative system.'}
              img={webImg}
              link={'https://animated-nasturtium-c30764.netlify.app/'}
              code={'https://github.com/Dac099/my-web-app'}
            />

            <ProjectCard 
              name={'BatataBit'}
              description={'A landing page for with static content to check the prices about crypto.'}
              img={webImg}
              link={'https://batabitproject.netlify.app/'}
              code={null}
            />
            
            <ProjectCard 
              name={'Card Fill front-end'}
              description={'A front-end component to get data about a card.'}
              img={webImg}
              link={'https://thriving-syrniki-24506c.netlify.app/'}
              code={null}
            />

          </div>

        </section>
      }

      {!showContent && currentCard === null &&      
        <p className={styles.hidden_title}>Projects</p>
      }
    </article>
  );
}