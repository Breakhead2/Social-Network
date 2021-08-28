import { HeadingBar } from "./HeadingBar/HeadingBar";
import { SideBar } from "./SideBar/SideBar";

import style from "./Menu.module.css";

export const Menu = (props) => {
  return (
    <div className={style.menuBox}>
      <HeadingBar />
      <SideBar friends={props.sideBar.friends} />
    </div>
  );
};
