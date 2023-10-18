import styles from './proyects.module.css';
import { Card } from '../card/card';
import htmlIcon from '/html-5.svg';
import cssIcon from '/css-3.svg';
import reactIcon from '/react.svg';
import tailwindIcon from '/tailwindcss-icon.svg';
import supabaseIcon from '/supabase-icon.svg';
import firebaseIcon from '/firebase.svg';
import psqlIcon from '/postgresql.svg';
import gitIcon from '/git-icon.svg';
import nodeIcon from '/nodejs-icon.svg';
import npmIcon from '/npm-icon.svg';
import expressIcon from '/express.svg';
import { Label } from '../label/label';

export function Proyects(){

  return (
    <Card>
      <section className={styles.proyects}>
        <h2 className={styles.proyects__title}>Check my <span>projects</span></h2>
        <p className={styles.proyects__description}>
          These section is about my personal
          proyects, and a few of them are 
          freelancer proyects.
        </p>

        <section className={styles.proyects__stack}>
          <Label image={reactIcon} link={null} text={'React'}/>
          <Label image={tailwindIcon} link={null} text={'Tailwind'}/>
          <Label image={supabaseIcon} link={null} text={'Supabase'}/>
          <Label image={firebaseIcon} link={null} text={'Firebase'}/>
          <Label image={htmlIcon} link={null} text={'HTML'}/>
          <Label image={cssIcon} link={null} text={'CSS'}/>
          <Label image={nodeIcon} link={null} text={'NodeJS'}/>
          <Label image={gitIcon} link={null} text={'Git'}/>
          <Label image={npmIcon} link={null} text={'NPM'}/>
          <Label image={psqlIcon} link={null} text={'PSQL'}/>
          <Label image={expressIcon} link={null} text={'Express'}/>
        </section>
      </section>
    </Card>
  );
}