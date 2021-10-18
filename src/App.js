import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Profile } from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { MessagesContainer } from "./components/Messages/MessagesContainer";
import { HashRouter } from "react-router-dom";

export const App = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="wrapper">
        <Header />
        <Menu />
        <div className="wrapper-content">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};
