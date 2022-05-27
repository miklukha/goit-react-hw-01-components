import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <>
      <div className={s.statistics}>
        {title && (
          <div className={s.wrapper}>
            <h2 className={s.title}>{title}</h2>
          </div>
        )}
        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: `#${randomColor()}` }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);

  return color;
}
