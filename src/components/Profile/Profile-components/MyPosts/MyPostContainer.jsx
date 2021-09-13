import { Mypost } from "./Mypost";
import { actionCreator } from "../../../../redux/store-redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addText: () => {
      let action = actionCreator("ADD-POST", null, null);
      dispatch(action);
    },
    updatePost: (text) => {
      let action = actionCreator("UPDATE-POST", null, text);
      dispatch(action);
    },
    updateLikes: (id) => {
      let action = actionCreator("UPDATE-LIKES", id, null); 
      dispatch(action);
    }
  };
};

export const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mypost);
