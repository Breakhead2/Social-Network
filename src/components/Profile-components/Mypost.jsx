import style from "./MyPost.module.css";

export const Mypost = () => {
  return (
    <div className={style.myPost}>
      <h3 className={style.headdig}>My Posts</h3>
      <div className={style.form}>
        <input className={style.input} type="text" placeholder="My news..." />
        <button className={style.btn_send}>Send</button>
      </div>
    </div>
  );
};
