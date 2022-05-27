import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span
            className={`${s.status} ${friend.isOnline ? s.true : s.false}`}
          ></span>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
