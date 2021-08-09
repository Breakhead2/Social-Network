import style from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <img className={style.logo} src="images/cloud.png" alt="logo" />
      <div className={style.label}>
        <a href="#s" className={style.label_link}>
          <span className={style.mark}>Litle Cloud</span> Social Network
        </a>
      </div>
    </header>
  );
};
