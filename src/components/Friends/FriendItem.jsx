import PropTypes from 'prop-types';
import { VscCircleLargeFilled } from 'react-icons/vsc';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className="item">
      <span className="status">
        <VscCircleLargeFilled style={isOnline} />
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
