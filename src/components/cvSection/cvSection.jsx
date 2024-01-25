import styles from './cvSection.module.css';
import { Card } from '../card/card';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languajeContext';

export function CvSection(){
  const { lang } = useContext(LanguageContext);
  const cvURL = lang === 'en' 
    ? 'https://drive.google.com/file/d/1JMb6GLeXphvoEaxO56ZNbXaRZY4PqSuW/view?usp=drive_link'
    : 'https://drive.google.com/file/d/1xNKqfth24JPHRcl9OWMBpsepGuVshbbj/view?usp=sharing'

  return (
    <Card>
      <section className={styles.cv__container}>
        <div className={styles.cv_text}>
          {lang === 'en'
            ? <p>Click on the image to see my <span>CV</span></p>
            : <p>Dale click a la imágen para ver mi <span>CV</span></p>
          }          
        </div>

        <div className={styles.cv__image_container}>
          <a 
            href={cvURL}
            target='_blank'
            rel='noreferrer'
            className={styles.cv_image}
          >  
          </a>
        </div>
      </section>
    </Card>
  );
}