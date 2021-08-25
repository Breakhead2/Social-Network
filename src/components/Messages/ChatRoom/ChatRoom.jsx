import style from "./ChatRoom.module.css";
import { NavLink } from "react-router-dom";

export const ChatRoom = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={style.item}>
      <NavLink activeClassName={style.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};
