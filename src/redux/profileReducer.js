const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
  posts: [
    { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
    { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
  ],
  newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
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
