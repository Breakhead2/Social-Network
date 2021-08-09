import { AboutMe } from "./Profile-components/AboutMe/AboutMe";
import { Mypost } from "./Profile-components/MyPosts/Mypost";
import { Wallpaper } from "./Profile-components/Wallpaper/Wallpaper";
import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={style.main}>
      <Wallpaper />
      <AboutMe />
      <Mypost />
    </div>
  );
};
