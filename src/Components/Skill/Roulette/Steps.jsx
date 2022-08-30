import "./roulette.scss";
export default function Steps(props) {
  return (
    <div className="insideRoulette text-shadow-halation text-neutral-200">
      <div className="steps fs-title fs-logline fw-bold">{props.steps}</div>
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