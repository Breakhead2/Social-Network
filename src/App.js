import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Messages } from "./components/Messages/Messages";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

export const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <div className="wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile profilePage={props.state.profilePage} />}
          />
          <Route
            path="/messages"
            render={() => <Messages messagePage={props.state.messagePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
