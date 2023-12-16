import styles from './cvSection.module.css';
import { Card } from '../card/card';

export function CvSection(){
  return (
    <Card>
      <section className={styles.cv__container}>
        <p className={styles.cv_text}>You can look at my <span>CV</span></p>

        <div className={styles.cv__image_container}>
          <a 
            href="https://drive.google.com/file/d/1Mth7YddbPh4hatFphT-luZ8MO3a5zBXz/view?usp=drive_link"
            target='_blank'
            rel='noreferrer'
            className={styles.cv_image}
          >  
          </a>
          <p className={styles.cv_tip}><i>Click on the image</i></p>
        </div>
      </section>
    </Card>
  );
}