import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.up}>
        <div className={`${style.item} ${style.active}`}>
          <a href="/profile">Profile</a>
        </div>
        <div className={style.item}>
          <a href="/messages"> Messages</a>
        </div>
        <div className={style.item}>
          <a href="/news">News</a>
        </div>
        <div className={style.item}>
          <a href="/music">Music</a>
        </div>
      </div>
      <div className={style.down}>
        <div className={style.item}>
          <a href="/settings">Settings</a>
        </div>
      </div>
    </nav>
  );
};
