import PropTypes from 'prop-types';
import { List, Item, Status, Name } from './FriendList.styled';
export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <Item key={id}>
          <Status eventType={isOnline}></Status>
          <img src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
