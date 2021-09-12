import style from "./MyPost.module.css";
import { Post } from "./Post/Post";
import React from "react";

export const Mypost = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.text} img={post.id} likesCount={post.likesCount} />
  ));

  return (
    <div className={style.myPost}>
      <h3 className={style.headdig}>My Posts</h3>
      <div className={style.form}>
        <input
          className={style.input}
          ref={props.text}
          type="text"
          placeholder="My news..."
          onChange={props.updatePost}
          value={props.newPostText}
        />
        <button className={style.btn_send} onClick={props.addText}>
          Send
        </button>
      </div>
      {postsElements}
    </div>
  );
};
