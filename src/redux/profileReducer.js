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
    case ADD_POST: {
      let newObj = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];

      stateCopy.posts.push(newObj);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.message;
      return stateCopy;
    }
    default:
      return state;
  }
};
