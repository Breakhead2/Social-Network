import style from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <img className={style.logo} src="images/Shnappi.png" alt="logo" />
      <div className={style.label}>
        <a href="#s" className={style.label_link}>
          Shnappi Social Network
        </a>
      </div>
    </header>
  );
};
