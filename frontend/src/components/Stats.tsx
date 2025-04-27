import './Stats.css';

const Stats = () => {
  const stats = [
    {
      count: 0,
      label: 'Members',
      link: '/members'
    },
    {
      count: 0,
      label: 'Alumni',
      link: '/alumni'
    },
    {
      count: 0,
      label: 'Events',
      link: '/events'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-count">{stat.count}</h3>
            <p className="stat-label">{stat.label}</p>
            <a href={stat.link} className="stat-link">View {stat.label}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats; 