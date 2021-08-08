export const Mypost = () => {
  return (
    <div className="content-my-post">
      <h3 className="content-my-post-headdig">My Posts</h3>
      <div className="content-my-post-form">
        <input
          className="content-my-post-input"
          type="text"
          placeholder="My news..."
        />
        <button className="content-my-post-btn-send">Send</button>
      </div>
    </div>
  );
};
