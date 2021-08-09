import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.up}>
        <div className={style.item}>Profile</div>
        <div className={style.item}>Messages</div>
        <div className={style.item}>News</div>
        <div className={style.item}>Music</div>
      </div>
      <div className={style.down}>
        <div className={style.item}>Settings</div>
      </div>
    </nav>
  );
};
