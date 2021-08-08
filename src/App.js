import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";

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
