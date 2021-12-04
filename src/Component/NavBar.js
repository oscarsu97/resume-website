import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../Image/Oscar_logo.png";
import blackFlower from "../Image/black_flower.svg";
import { animateScroll as scroll } from "react-scroll";
import Hamburger from "./Hamburger";
import NavLink from "./NavLink";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [ulTop, setUlTop] = useState("-100vh");
  function openNav() {
    setOpen((current) => !current);
    !open ? setUlTop("5rem") : setUlTop("-100vh");
  }
  return (
    <>
      <div className="navigation">
        <div className="logo-container" onClick={() => scroll.scrollToTop()}>
          <img className="logo" src={logo} alt="logo" />
          <img className="black-flower" src={blackFlower} alt="black_flower" />
        </div>
        <div
          className="nav_button"
          onClick={() => {
            openNav();
          }}
        >
          {open ? (
            <FontAwesomeIcon icon={faTimes} id="close" />
          ) : (
            <FontAwesomeIcon icon={faBars} id="open" />
          )}
        </div>
        <nav>
          <NavLink navName="About" hideNav={() => {}} />
          <NavLink navName="Experience" hideNav={() => {}} />
          <NavLink navName="Portfolio" hideNav={() => {}} />
          <NavLink navName="Quiz" hideNav={() => {}} />
          <NavLink navName="Contact" hideNav={() => {}} />
        </nav>
      </div>
      <Hamburger
        ulTop={ulTop}
        hideNav={() => {
          openNav();
        }}
      />
    </>
  );
};

export default NavBar;
