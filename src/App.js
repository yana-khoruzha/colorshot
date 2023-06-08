import './index.css';
import styles from './App.module.css';
import { Navigation } from './components/Navigation';
import { UserInfo } from './components/UserInfo';
import { Galery } from './components/Galery';
import { Footer } from './components/Footer';
import classNames from 'classnames';




// connection.connect((err) => {
//   if (err) {
//     // console.log(err);
//     return err;
//   } else {
//     // console.log('successful');
//   }
// });

// connection.end((err) => {
//   if (err) {
//     // return console.log('Error: ' + err.message);
//   }
//   // console.log('The connection is closed');
// });

// let query = 'SELECT * FROM users';

// connection.query(query, (err, result, field) => {
//   // console.log(err);
//   // console.log(result);
//   // console.log(field);
// });

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
