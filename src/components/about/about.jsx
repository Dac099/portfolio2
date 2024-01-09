import styles from './about.module.css';
import picture from '/picture.webp';
import software from '/software.png';
import { Card } from '../card/card';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languajeContext';

export function About(){
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <Card>
      <select 
        name="language" 
        className={styles.lang_selector}
        onChange={e => setLang(e.target.value)}
      >
        <option 
          value="en"
        >
          {lang === 'en' ? 'English': 'Inglés'}
        </option>

        <option 
          value="es"
        >
          {lang === 'en' ? 'Spanish': ' Español'}
        </option>
      </select>

      <section>
          <h1 className={styles.about__title}>
            {lang === 'en'
              ? <p><span>Software</span> developer</p>
              : <p><span>Desarrollador</span> de software</p>
            }
          </h1>

          <section className={styles.about__main_content}>
              <div className={styles.images}>
                <img 
                  src={picture}
                  className={styles.about__picture}
                />
                <img 
                  src={software}
                  className={styles.about__picture_icon}
                />
              </div>

            <div className={styles.about__description}>
              {lang === 'en'
                ? <p>
                    My name is <span>David Ceja Zapata</span>, And I am a software developer, I love computing and would like to learn everything about it, however, I am currently concentrating on web development (you can find my stack below).
                  </p>
                : <p>
                    Mi nombre es <span>David Ceja Zapata</span>, Y soy desarrollador de software, me encanta la informática y me gustaría aprender todo sobre ella, sin embargo, actualmente me estoy concentrando en el desarrollo web (puedes encontrar mi <i>stack</i> abajo).
                  </p>
              }
               
            </div>
          </section>
        </section>          
    </Card>
  );
}