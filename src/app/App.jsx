import styles from './App.module.css';
import { Canvas } from '../components/canvas/canvas';

function App() {

  return (
    <>
      <main className={styles.container}>
        <Canvas/>          
      </main>
    </>
  )
}

export {App};
