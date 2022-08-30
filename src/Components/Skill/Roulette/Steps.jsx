import "./roulette.scss";
export default function Steps(props) {
  return (
    <div className="insideRoulette">
      <div className="steps fs-logline">{props.steps}</div>
      <div className="examples">
        <div className="list">
          <div className="listItem fs-logline">{props.ex1}</div>
          <div className="listItem fs-logline">{props.ex2}</div>
          <div className="listItem fs-logline">{props.ex3}</div>
        </div>
      </div>
    </div>
  );
}