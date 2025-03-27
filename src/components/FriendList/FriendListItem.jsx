import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={styles.friendsImg} src={avatar} alt={name} width="48" />
      <p className={styles.friendsText}>{name}</p>
      <p className={isOnline ? styles.onlyne : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
