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
  get State() {
    return this._state;
  },
  addPost(message) {
    let newObj = {
      id: this._state.profilePage.posts.length + 1,
      text: message,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newObj);
    this._callsSubscriber(this._state);
    this._state.profilePage.newPostText = "";
    //console.log(this.State);
  },
  updatePost(message) {
    this._state.profilePage.newPostText = message;
    this._callsSubscriber(this._state);
    //console.log(this.State);
  },
  subscribe(observer) {
    this._callsSubscriber = observer;
  },
  _callsSubscriber() {
    console.log("Object state changed");
  },
};

export default store;
