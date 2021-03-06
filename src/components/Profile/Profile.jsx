import { AboutMe } from "./Profile-components/AboutMe/AboutMe";
import { MyPostContainer } from "./Profile-components/MyPosts/MyPostContainer";
import { Wallpaper } from "./Profile-components/Wallpaper/Wallpaper";
import style from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={style.main}>
      <Wallpaper />
      <AboutMe />
      <MyPostContainer />
    </div>
  );
};
