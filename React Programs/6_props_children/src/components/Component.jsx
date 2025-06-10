import S from "./Component.module.css";
function Component(props) {
  return <div className={S.container}>{props.children}</div>;
}

export default Component;
