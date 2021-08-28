let state = {
  profilePage: {
    posts: [
      { id: 1, text: "Hello, where are you disappear?", likesCount: 12 },
      { id: 1, text: "Dude, WTF!? Where is my money?", likesCount: 4 },
    ],
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

  addPost(message) {
    console.log(this); // указывает на объект props компонента MyPost
    let newObj = {
      id: this.posts.length + 1,
      text: message,
      likesCount: 0,
    };
    this.posts.push(newObj);
    console.log(state);
  },
};
export default state;
