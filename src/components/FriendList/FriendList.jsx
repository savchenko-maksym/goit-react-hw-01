import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.friendsItem} key={id}>
          <img
            className={styles.friendsImg}
            src={avatar}
            alt={name}
            width="48"
          />
          <p className={styles.friendsText}>{name}</p>
          <p className={isOnline ? styles.onlyne : styles.offline}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
