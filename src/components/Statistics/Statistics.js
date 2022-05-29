import { getRandomColor } from 'helpers/getRandomColor';
import PropTypes from 'prop-types';
import {
  Card,
  Wrapper,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <>
      <Card>
        {title && (
          <Wrapper>
            <Title>{title}</Title>
          </Wrapper>
        )}
        <List>
          {stats.map(({ id, label, percentage }) => (
            <Item key={id} style={{ backgroundColor: `${getRandomColor()}` }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          ))}
        </List>
      </Card>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
