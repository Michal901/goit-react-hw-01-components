import './Statistics.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {!title ? <h2>Statistics:</h2> : <h2>{title}</h2>}

      {stats.map(item => (
        <div key={item.id}>
          <ul className="stat-list">
            <li className="item">
              <span className="label">{`${item.label}`}</span>
              <span className="percentage">{`${item.percentage}%`}</span>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.string,
};
