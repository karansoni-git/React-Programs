import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ParaCompo from "./ParaCompo";

const Dashboard = () => {
  const nextTab = useNavigate();

  return (
    <div className="text">
      <ul className="links mini">
        <li>
          <NavLink
            to="/dashboard/courses"
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active"
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/tests"
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active"
            }
          >
            Tests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reports"
            className={({ isActive }) =>
              isActive ? "active-link" : "not-active"
            }
          >
            Reports
          </NavLink>
        </li>
      </ul>
      <Outlet />

      <h1>Dashboard Page Is Open</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          nextTab("/");
        }}
      >
        Home
      </button>
      <br />
      <button
        type="button"
        className="btn"
        onClick={() => {
          <ParaCompo />;
          nextTab("/student/karan");
        }}
      >
        Check User
      </button>
    </div>
  );
};

export default Dashboard;
