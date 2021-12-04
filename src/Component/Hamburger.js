import NavLink from "./NavLink";

const Hamburger = ({ ulTop, hideNav }) => {
  const ulStyle = {
    top: ulTop,
  };
  return (
    <div className="hamburger">
      <ul style={ulStyle}>
        <li>
          <NavLink navName="About" hideNav={hideNav} />
        </li>
        <li>
          <NavLink navName="Experience" hideNav={hideNav} />
        </li>
        <li>
          <NavLink navName="Portfolio" hideNav={hideNav} />
        </li>
        <li>
          <NavLink navName="Quiz" hideNav={hideNav} />
        </li>
        <li>
          <NavLink navName="Contact" hideNav={hideNav} />
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
