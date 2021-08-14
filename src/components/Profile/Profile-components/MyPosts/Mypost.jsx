import style from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const Mypost = () => {
  let posts = [
    { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
    { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.text} likesCount={post.likesCount} />
  ));

  return (
    <div className={style.myPost}>
      <h3 className={style.headdig}>My Posts</h3>
      <div className={style.form}>
        <input className={style.input} type="text" placeholder="My news..." />
        <button className={style.btn_send}>Send</button>
      </div>
      {postsElements}
    </div>
  );
};
