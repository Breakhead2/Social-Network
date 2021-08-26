import style from "./ChatRoom.module.css";
import { NavLink } from "react-router-dom";

export const ChatRoom = (props) => {
  let path = "/messages/" + props.id;
  let src = "images/ava" + props.id + ".jpg";
  return (
    <div className={style.item}>
      <img src={src} alt="ava" />
      <NavLink activeClassName={style.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};
