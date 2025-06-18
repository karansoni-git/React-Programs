import { useNavigate, useParams } from "react-router-dom";

const ParaCompo = () => {
  const { name } = useParams();
  const nextTab = useNavigate();

  return (
    <div className="text">
      <h1>User Name : {name}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          <ParaCompo />;
          nextTab("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default ParaCompo;
