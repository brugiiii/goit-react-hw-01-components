import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const bgColor = {
    backgroundColor: isOnline ? 'lime' : 'tomato',
  };

  return (
    <li className={css.item}>
      <span style={bgColor} className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

// Тут не описую проп тайпи, адже уже описав всі ці данні у файлі FriendList.js

export default FriendListItem;
