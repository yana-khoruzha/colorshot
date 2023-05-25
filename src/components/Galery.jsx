import styles from './Galery.module.css';

export const Galery = () => {
  return (
  <div className={styles.galery}>
      <div className={styles.row}>
        <img className={styles.photo} width="304" height="304" src="https://cs13.pikabu.ru/post_img/2021/02/24/1/og_og_161412457327153003.jpg" alt="user" />
        <img className={styles.photo} width="304" height="304" src="https://cs13.pikabu.ru/post_img/2021/02/24/1/og_og_161412457327153003.jpg" alt="user" />
        <img className={styles.photo} width="304" height="304" src="https://cs13.pikabu.ru/post_img/2021/02/24/1/og_og_161412457327153003.jpg" alt="user" />
      </div>
  </div>
  )
};

