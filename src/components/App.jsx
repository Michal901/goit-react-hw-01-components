import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '30px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats:" stats={data} />
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendList key={friend.id} {...friend} />
        ))}
      </ul>

      <table className="transaction-history">
        <thead>
          <tr className="table-tr">
            <th className="table-th">Type</th>
            <th className="table-th">Amount</th>
            <th className="table-th">Currency</th>
          </tr>
        </thead>
        <tbody>
          <TransactionHistory items={transactions} />
        </tbody>
      </table>
    </div>
  );
};
