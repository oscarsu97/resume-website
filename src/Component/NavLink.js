import { useState } from "react";
import { Link } from "react-scroll";
import moonwalk from "../Image/moon_walk.svg";

const NavLink = ({ navName, hideNav }) => {
  const [mj_moonwalk, setMoonWalk] = useState("");
  function handleClick() {
    setMoonWalk("moonwalkOut");
    setTimeout(() => hideNav(), 1000);
  }

  return (
    <Link
      activeClass="active"
      className="nav-link"
      to={navName.toLowerCase()}
      spy={true}
      smooth="easeOutQuad"
      duration={1000}
      delay={500}
      offset={-50}
      onClick={() => handleClick()}
      onAnimationEnd={() => setTimeout(() => setMoonWalk("moonwalkIn"), 1000)}
    >
      <div className="moonwalk-container">
        <img className={mj_moonwalk} src={moonwalk} alt="moonwalk" />
      </div>
      {navName}
    </Link>
  );
};

export default NavLink;
