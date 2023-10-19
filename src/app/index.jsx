import styles from './App.module.css';
import { Canvas } from '../components/canvas/canvas';
import { About } from '../components/about/about';
import { CvSection } from '../components/cvSection/cvSection';
import { Proyects } from '../components/proyects/proyects';
import { Contact } from '../components/contact/contact';

export function App() {

  return (
    <>
      <main className={styles.container}>
        <Canvas/> 
        <section className={styles.content}>
          <About />
          <CvSection />
          <Proyects />
          <Contact />
        </section>        
      </main>
    </>
  )
}

