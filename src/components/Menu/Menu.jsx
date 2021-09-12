import { HeadingBar } from "./HeadingBar/HeadingBar";
import style from "./Menu.module.css";
import { SideBarContainer } from "./SideBar/SideBarContainer";

export const Menu = (props) => {
  return (
    <div className={style.menuBox}>
      <HeadingBar />
      <SideBarContainer />
    </div>
  );
};
