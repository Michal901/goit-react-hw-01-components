import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendList({ avatar, name, isOnline }) {
  return (
    <>
      <li className="item">
        <span className={`status ${isOnline ? 'online' : 'offline'}`}>
          {isOnline}
        </span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    </>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
