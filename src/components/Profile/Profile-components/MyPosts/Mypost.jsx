import style from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const Mypost = (props) => {
  let postsElements = props.posts.map((post) => (
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
