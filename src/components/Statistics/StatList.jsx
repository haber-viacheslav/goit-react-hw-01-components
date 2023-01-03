import { StatItem } from './StatItem';
import PropTypes from 'prop-types';

export const StatList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
