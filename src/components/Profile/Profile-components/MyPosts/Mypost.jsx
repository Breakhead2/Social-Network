import style from "./MyPost.module.css";
import { Post } from "./Post/Post";
import React from "react";
import { actionCreator } from "../../../../redux/store-redux";

export const Mypost = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.text} img={post.id} likesCount={post.likesCount} />
  ));

  let text = React.createRef();

  const addText = () => {
    debugger;
    let action = actionCreator("ADD-POST", null, text.current.value);
    props.dispatch(action);
  };

  const updatePost = () => {
    debugger;
    let action = actionCreator("UPDATE-POST", null, text.current.value);
    props.dispatch(action);
  };

  return (
    <div className={style.myPost}>
      <h3 className={style.headdig}>My Posts</h3>
      <div className={style.form}>
        <input
          className={style.input}
          ref={text}
          type="text"
          placeholder="My news..."
          onChange={updatePost}
          value={props.newPostText}
        />
        <button className={style.btn_send} onClick={addText}>
          Send
        </button>
      </div>
      {postsElements}
    </div>
  );
};
