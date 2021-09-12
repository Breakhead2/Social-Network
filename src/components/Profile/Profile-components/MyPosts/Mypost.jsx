import React from "react";
import style from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const Mypost = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.text} img={post.id} likesCount={post.likesCount} />
  ));

  let myRef = React.createRef();

  const onAddPost = () => {
    props.addText();
  };

  const onUpdatePost = () => {
    let text = myRef.current.value;
    props.updatePost(text);
  };

  return (
    <div className={style.myPost}>
      <h3 className={style.headdig}>My Posts</h3>
      <div className={style.form}>
        <input
          className={style.input}
          ref={myRef}
          type="text"
          placeholder="My news..."
          onChange={onUpdatePost}
          value={props.newPostText}
        />
        <button className={style.btn_send} onClick={onAddPost}>
          Send
        </button>
      </div>
      {postsElements}
    </div>
  );
};
