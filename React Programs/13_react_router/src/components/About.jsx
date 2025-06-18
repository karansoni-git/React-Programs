import { useNavigate } from "react-router-dom";
import ParaCompo from "./ParaCompo";

const About = () => {
  const nextTab = useNavigate();
  return (
    <div className="text">
      <h1>About Page Is Open</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          nextTab("/dashboard");
        }}
      >
        Dashboard
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

export default About;
