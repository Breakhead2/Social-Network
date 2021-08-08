import "./App.css";

export const App = () => {
  return (
    <div className="wrapper">
      <header>
        <img className="header-logo" src="images/Shnappi.png" alt="logo" />
        <div className="header-label">
          <a href="#s" className="header-label-link">
            Shnappi Social Network
          </a>
        </div>
      </header>
      <nav className="nav-bar">
        <div className="nav-bar-up">
          <div className="nav-bar-item">Profile</div>
          <div className="nav-bar-item">Messages</div>
          <div className="nav-bar-item">News</div>
          <div className="nav-bar-item">Music</div>
        </div>
        <div className="nav-bar-down">
          <div className="nav-bar-item">Settings</div>
        </div>
      </nav>
      <div className="content-main-wellpaper">
        <img
          className="content-main-wellpaper-img"
          alt="wellpaper"
          src="images/wellpaper.png"
        />
      </div>
      <div className="content-main">
        <div className="content-profile">
          <img
            className="content-profile-myphoto"
            src="images/blink_ava2.jpg"
            alt="my_photo"
          />
          <div className="introduce-yourself">
            <h3 className="Name">Denis Sazonov</h3>
            <p>Date of birth: 06 march 1993</p>
            <p>City: Samara</p>
            <p>Education: SSAU 2016</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-author">&copy; Denis Sazonov 2021</div>
      </footer>
    </div>
  );
};
