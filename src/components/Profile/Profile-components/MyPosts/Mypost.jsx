import style from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const Mypost = () => {
  return (
    <div className={style.myPost}>
      <h3 className={style.headdig}>My Posts</h3>
      <div className={style.form}>
        <input className={style.input} type="text" placeholder="My news..." />
        <button className={style.btn_send}>Send</button>
      </div>
      <Post message="Hello, where are you disappear?" likesCount="12" />
      <Post message="Dude, WTF!? Where is my money?" likesCount="4" />
    </div>
  );
};
