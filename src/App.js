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

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <div className="wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
