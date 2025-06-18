import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active"
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
