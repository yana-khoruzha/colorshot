import styles from './App.module.css';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
