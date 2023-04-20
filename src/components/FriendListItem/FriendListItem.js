import css from './FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={clsx(css.status, css[isOnline])}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

// Тут не описую проп тайпи, адже уже описав всі ці данні у файлі FriendList.js

export default FriendListItem;
