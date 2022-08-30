import "./roulette.scss";
export default function Steps(props) {
  return (
    <div className="insideRoulette">
      <div className="steps fs-logline">{props.steps}</div>
      <div className="examples">
        <div className="list">
          <li className="listItem fs-logline">{props.ex1}</li>
          <li className="listItem fs-logline">{props.ex2}</li>
          <li className="listItem fs-logline">{props.ex3}</li>
        </div>
      </div>
    </div>
  );
}