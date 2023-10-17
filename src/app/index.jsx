import styles from './App.module.css';
import { Canvas } from '../components/canvas/canvas';
import { About } from '../components/about/about';
import { Proyects } from '../components/proyects/proyects';
import { Stack } from '../components/stack/stack';
import { Contact } from '../components/contact/contact';

export function App() {

  return (
    <>
      <main className={styles.container}>
        <Canvas/> 
        <section className={styles.content}>
          <section className={styles.card_container}>
            <About />
            <Proyects />
            <Stack />
            <Contact />
          </section>
        </section>        
      </main>
    </>
  )
}

