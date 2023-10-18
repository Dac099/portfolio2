import styles from './about.module.css';
import picture from '/picture.jpg';
import reactIcon from '/react.svg';
import { Card } from '../card/card';

export function About(){

  return (
    <Card>
      <section>
          <h1 className={styles.about__title}>
            React <span>front-end</span> developer
          </h1>

          <section className={styles.about__main_content}>
              <div className={styles.images}>
                <img 
                  src={picture}
                  className={styles.about__picture}
                />
                <img 
                  src={reactIcon}
                  className={styles.about__react_icon}
                />
              </div>

            <p className={styles.about__description}>
              My name is <span>David Ceja Zapata</span>, and I am a React Front-end developer. My focus is to create interfaces with the best development practices, as well as leaving a lasting impression. From responsive design to performance optimization.
            </p>
          </section>
        </section>          
    </Card>
  );
}