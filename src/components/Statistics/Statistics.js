export function Statistics(props) {
  return (
    <Section title={props.title}>
      <List stats={props.stats} />
    </Section>
  );
}

function List({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
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
