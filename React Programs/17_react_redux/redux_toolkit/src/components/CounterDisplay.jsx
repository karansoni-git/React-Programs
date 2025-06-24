import { useSelector } from "react-redux";

const CounterDisplay = () => {
  //destructuring countaVal from useCounterSlice
  const { counterVal } = useSelector((store) => store.useCounterSlice);
  return <p className="lead mb-4">Counter Value : {counterVal}</p>;
};

export default CounterDisplay;
