import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import CounterDisplay from "./components/CounterDisplay";
import Header from "./components/Header";
import PrivacyMsg from "./components/PrivacyMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMsg /> : <CounterDisplay />}
          <Controls />
        </div>
      </div>
    </Container>
  );
}

export default App;
