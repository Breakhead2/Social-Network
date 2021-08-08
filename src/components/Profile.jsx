import { Mypost } from "./Profile-components/Mypost";
import { AboutMe } from "./Profile-components/AboutMe";
import { Wallpaper } from "./Profile-components/Wallpaper";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="content-main">
      <Wallpaper />
      <AboutMe />
      <Mypost />
    </div>
  );
};
