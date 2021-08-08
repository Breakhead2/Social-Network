import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";
import { Wallpaper } from "./components/Wallpaper";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Wallpaper />
      <Profile />
      <Footer />
    </div>
  );
};
