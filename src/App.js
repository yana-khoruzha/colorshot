import './index.css';
import styles from './App.module.css';
import { Navigation } from './components/Navigation';
import { UserInfo } from './components/UserInfo';
import { Galery } from './components/Galery';
import {Footer } from './components/Footer';
import classNames from 'classnames';

function App() {
  return (
    <div className={classNames(styles.section, styles.fontLink)}>
      <Navigation />
      <UserInfo />
      <Galery />
      <Galery />
      <Galery />
      <Footer />
    </div>
  );
}

export default App;
