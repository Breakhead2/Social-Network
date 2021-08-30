import { AboutMe } from "./Profile-components/AboutMe/AboutMe";
import { Mypost } from "./Profile-components/MyPosts/Mypost";
import { Wallpaper } from "./Profile-components/Wallpaper/Wallpaper";
import style from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={style.main}>
      <Wallpaper />
      <AboutMe />
      <Mypost
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updatePost={props.updatePost}
      />
    </div>
  );
};
