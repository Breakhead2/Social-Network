import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.up}>
        <div className={`${style.item} ${style.active}`}>
          <NavLink exact to="/profile" activeClassName={style.active}>
            Profile
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink exact to="/messages" activeClassName={style.active}>
            Messages
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink exact to="/news" activeClassName={style.active}>
            News
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink exact to="/music" activeClassName={style.active}>
            Music
          </NavLink>
        </div>
      </div>
      <div className={style.down}>
        <div className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
