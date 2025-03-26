import Profile from "./components/Profile/Profile";
import Container from "./components/Container/Container";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./data/userData.json";
import friendsData from "./data/friends.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <Container>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
