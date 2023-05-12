import styles from './Navigation.module.css';
import Home from './images/Home-fill.png';
import Messager from './images/Messenger.png';
import NewPost from './images/NewPosts.png';
import FindPeople from './images/FindPeople.png';
import ActivityFeed from './images/ActivityFeed.png';
import ProfilePic from './images/Profile-Pic-S.png';

console.log(styles);

export const Navigation = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img width="60" src="/images/ColorShot.png" alt="logo" />
      </div>
      <input className={styles.input} type="text" placeholder="       Search" />
      <div className={styles.menu_Buttons}>
        <img src={Home} alt="Home" className={styles.menu_Button}/>
        <img src={Messager} alt="Home" className={styles.menu_Button}/>
        <img src={NewPost} alt="NewPost" className={styles.menu_Button}/>
        <img src={FindPeople} alt="FindPeople" className={styles.menu_Button}/>
        <img src={ActivityFeed} alt="ActivityFeed" className={styles.menu_Button}/>
        <img src={ProfilePic} alt="ProfilePic" className={styles.menu_Button}/>
      </div>
    </div>
  );
};
