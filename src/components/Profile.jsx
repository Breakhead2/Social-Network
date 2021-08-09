import { Mypost } from "./Profile-components/Mypost";
import { AboutMe } from "./Profile-components/AboutMe";
import { Wallpaper } from "./Profile-components/Wallpaper";
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
