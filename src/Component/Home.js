import Logo from "./Logo";
import mj from "../Image/michael-jackson-silhouette.svg";
import { GiRose } from "react-icons/gi";
const Home = () => {
  return (
    <div className="home" id="home">
      <Logo />
      <img className="mj" src={mj} alt=""></img>
      <h1>
        <span>Nice to meet you</span>
        <GiRose />
      </h1>
    </div>
  );
};

export default Home;
