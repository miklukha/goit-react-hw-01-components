import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
  return (
    <Section title={title}>
      <List stats={stats} />
    </Section>
  );
}

function List({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <Li label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
}

function Li({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

List.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Li.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
/**
 *   <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
 */
