import styles from './contact.module.css';
import { Card } from '../card/card';
import { Label } from '../label/label';
import github from '/github-icon.svg';
import linkedin  from '/linkedin-icon.svg';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languajeContext';

export function Contact(){
  const { lang } = useContext(LanguageContext);

  return (
    <Card>
      <div className={styles.text}>
        {lang === 'en'
          ? <p>If you are interested in <span>working with me</span>, please contact me.</p> 
          : <p>Si estás interesado en <span>trabajar conmigo</span>, contactame.</p>
        }        
      </div>
      <section className={styles.contact}>
        <Label
          image={github}
          link={'https://github.com/Dac099'}
          text={'GitHub'}
          invert={true}
        />

        <Label
          image={linkedin}
          link={'https://www.linkedin.com/in/david-ceja-zapata/'}
          text={'LinkedIn'}
        />

      </section>
    </Card>
  );
}