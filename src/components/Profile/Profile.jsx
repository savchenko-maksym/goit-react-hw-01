import styles from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardUpWrap}>
        <img className={styles.cardImg} src={avatar} alt="User avatar" />
        <p className={styles.cardTitle}>{username}</p>
        <p className={styles.cardText}>{tag}</p>
        <p className={styles.cardText}>{location}</p>
      </div>

      <ul className={styles.cardList}>
        <li className={styles.cardItem}>
          <span className={styles.cardSubtitle}>Followers</span>
          <span className={styles.cardSubtitleInfo}>{followers}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.cardSubtitle}>Views</span>
          <span className={styles.cardSubtitleInfo}>{views}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.cardSubtitle}>Likes</span>
          <span className={styles.cardSubtitleInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
