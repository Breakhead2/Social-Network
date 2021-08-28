import style from "./SideBar.module.css";
import { SideBarItem } from "./SideBarItem/SideBarItem";

export const SideBar = (props) => {
  let topFriends = props.friends.map((friend) => (
    <SideBarItem id={friend.id} name={friend.name} />
  ));
  return (
    <div className={style.sideBar}>
      <h3 className={style.heading}>SideBar</h3>
      <div className={style.sideBarBox}>{topFriends}</div>
    </div>
  );
};
