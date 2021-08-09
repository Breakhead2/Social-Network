import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Profile } from "./components/Profile/Profile";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Profile />
      <Footer />
    </div>
  );
};
