const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

export const profileReducer = (action, state) => {
  switch (action.type) {
    case ADD_POST:
      let newObj = {
        id: state.posts.length + 1,
        text: action.message,
        likesCount: 0,
      };
      state.posts.push(newObj);
      state.newPostText = "";
      break;
    case UPDATE_POST:
      state.newPostText = action.message;
      break;
    default:
      return state;
  }
  return state;
};
