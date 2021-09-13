import style from "./Post.module.css";

export const Post = (props) => {
  const onLikeCounter = (e) => {
    let id = e.target.id;
    props.updateLikes(id);
  };

  return (
    <div className={style.item}>
      <div className={style.left}>
        <img alt="avatar" src="images/cookie.jpg" />
        <p className={style.message}>{props.message}</p>
      </div>
      <div className={style.like}>
        <div className={style.likesCount}>{props.likesCount}</div>
        <div
          className={style.likeCounter}
          id={props.id}
          onClick={onLikeCounter}
        >
          Like
        </div>
      </div>
    </div>
  );
};
