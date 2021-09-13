const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const UPDATE_LIKES = "UPDATE-LIKES";

let initialState = {
  posts: [
    { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
    { id: 2, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
  ],
  newPostText: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newObj = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likesCount: 0,
      };
      return {
         ...state,
          posts: [...state.posts, newObj],
          newPostText: "",
        }
    case UPDATE_POST: 
      return { 
      ...state,
      newPostText: action.message,
      };
    case UPDATE_LIKES: 
      let stateCopy = {
          ...state,
          posts: [...state.posts]
          };

      let post = stateCopy.posts.find(post => post.id == action.id);
      post.likesCount += 1;
      return stateCopy;
    default:
      return state;
  }
};
