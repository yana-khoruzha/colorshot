import Avatar from './images/Avatar.png';
import styles from './UserInfo.module.css';
import Subscribed from './images/Subscribed.png';
import Arrow from './images/Arrow.png';

export const UserInfo = () => {
  let name = 'userName';
  let posts = 0;
  let followers = 0;
  let following = 0;
  return (
    <div className={styles.section_userInfo}>
      <div className={styles.wrapper}>
        <div className={styles.userInfo}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
          <div className={styles.about}>
            <div className={styles.nameAndButtons}>
              <h1>{name}</h1>
              <button className={styles.sendMessage}>send a message</button>
              <button className={styles.subscribed}>
                <img src={Subscribed} alt="subscribed" />
              </button>
              <button className={styles.arrow}>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
            <div className={styles.counters}>
              <span className={styles.counter}>
                {posts} <span className={styles.text}>Posts</span>
              </span>
              <span className={styles.counter}>
                {followers} <span className={styles.text}>Followers</span>
              </span>
              <span className={styles.counter}>
                {following} <span className={styles.text}>Following</span>
              </span>
            </div>
            <div className={styles.header}>Mediamodifier Building Brands</div>
            <div className={styles.subheader}>Product / service</div>
            <div className={styles.description}>We provide essential tools to help entrepreneurs grow their businesses online.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
