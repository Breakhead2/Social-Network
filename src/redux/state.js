let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
        { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
      ],
      newPostText: "",
    },
    messagePage: {
      newMessage: "",
      chatInfo: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Nickolay" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Anna" },
      ],
      messages: [
        { id: 1, text: "Hi!" },
        { id: 2, text: "How are you?" },
      ],
    },
    sideBar: {
      friends: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Nickolay" },
        { id: 3, name: "Ivan" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Anna" },
      ],
    },
  },
  _callsSubscriber() {
    console.log("Object state changed");
  },

  get State() {
    return this._state;
  },
  subscribe(observer) {
    this._callsSubscriber = observer;
  },

  dispatch(action) {
    debugger;
    if (action.type === "ADD-POST") {
      let newObj = {
        id: this._state.profilePage.posts.length + 1,
        text: action.message,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newObj);
      this._callsSubscriber(this._state);
      this._state.profilePage.newPostText = "";
    } else if (action.type === "UPDATE-POST") {
      this._state.profilePage.newPostText = action.message;
      this._callsSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newObj = {
        id: this._state.messagePage.messages.length + 1,
        text: action.message,
      };
      this._state.messagePage.messages.push(newObj);
      this._callsSubscriber(this._state);
      this._state.messagePage.newMessage = "";
    } else if (action.type === "UPDATE-MESSAGE") {
      this._state.messagePage.newMessage = action.message;
      this._callsSubscriber(this._state);
    }
  },
};

export function Action(type, ...rest) {
  let [id, message] = rest;

  this.type = type;
  this.id = id;
  this.message = message;
}

export default store;
