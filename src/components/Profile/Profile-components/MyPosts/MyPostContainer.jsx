import { Mypost } from "./Mypost";
import React from "react";
import { actionCreator } from "../../../../redux/store-redux";

export const MyPostConainer = (props) => {
  let text = React.createRef();

  const addText = () => {
    let action = actionCreator("ADD-POST", null, text.current.value);
    props.dispatch(action);
  };

  const updatePost = () => {
    let action = actionCreator("UPDATE-POST", null, text.current.value);
    props.dispatch(action);
  };

  return (
    <Mypost
      updatePost={updatePost}
      addText={addText}
      posts={props.posts}
      text={text}
      newPostText={props.newPostText}
    />
  );
};
