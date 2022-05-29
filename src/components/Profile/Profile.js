import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <>
      <Card>
        <Description>
          <Avatar>
            <img src={avatar} alt={username} />
          </Avatar>
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <Item>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </Item>
          <Item>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </Item>
          <Item>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </Item>
        </Stats>
      </Card>
    </>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
