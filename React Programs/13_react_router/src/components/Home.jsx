import { useNavigate } from "react-router-dom";
import ParaCompo from "./ParaCompo";

const Home = () => {
  const nextTab = useNavigate();
  return (
    <div className="text">
      <h1>Home Page Is Open</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          nextTab("/about");
        }}
      >
        About
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

export default Home;
