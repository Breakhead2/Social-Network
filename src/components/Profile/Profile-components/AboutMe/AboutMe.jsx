import style from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={style.profile}>
      <img
        className={style.myphoto}
        src="images/blink_ava2.jpg"
        alt="my_photo"
      />
      <div className={style.introduce}>
        <h3>Denis Sazonov</h3>
        <p>Date of birth: 06 march</p>
        <p>City: Samara</p>
        <p>Education: SSAU 2016</p>
      </div>
    </div>
  );
};
