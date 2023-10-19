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
import batatabit from '/batatabit.png';
import cardComponent from '/card_component.png';
import dateAndRate from '/date_and_rate.png';
import jsonPlaceholder from '/json_placeholder.png';
import { Label } from '../label/label';
import { ProjectCard } from '../projectCard/projectCard';

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
        
        <section className={styles.projects__carrucel}>
          <ProjectCard
            title={'Date and Rate'}
            description={'This app is about connect with people and create groups with them, register the activities that you made with a rating and description.'}
            link={'https://dateandratelanding.netlify.app/'}
            source={'https://github.com/Dac099/date_landing'}
            image={dateAndRate}
          />

          <ProjectCard
            title={'JSON Placeholder Consumer'}
            description={'This wep is for create a user system with the data of the JSON Placeholder API. You can check photos, todos, comments, and profiles.'}
            link={'https://animated-nasturtium-c30764.netlify.app/'}
            source={'https://github.com/Dac099/my-web-app'}
            image={jsonPlaceholder}
          />

          <ProjectCard
            title={'Batatabit'}
            description={'A landing page about crypto and prices. (The data is not updated)'}
            link={'https://batabitproject.netlify.app/'}
            source={null}
            image={batatabit}
          />
          
          <ProjectCard
            title={'Credit Card component'}
            description={'A front-end component for represent a dynamic and responsive form.'}
            link={'https://thriving-syrniki-24506c.netlify.app/'}
            source={null}
            image={cardComponent}
          />
        </section>
        
        <p className={styles.proyects__description}>
          All of these proyects were made with my main stack.
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
          <Label image={expressIcon} link={null} text={'Express'} invert={true}/>
        </section>
      </section>
    </Card>
  );
}