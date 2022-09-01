import "./roulette.scss";
export default function Steps(props) {
  return (
    <div className="RouletteContent text-shadow-halation text-neutral-200">
      <div className="RouletteStep fs-title fs-logline fw-bold">{props.steps}</div>
      <div className="RouletteExample">
        <div className="RouletteList">
          <div className="RouletteListItem fs-logline">{props.ex1}</div>
          <div className="RouletteListItem fs-logline">{props.ex2}</div>
          <div className="RouletteListItem fs-logline">{props.ex3}</div>
        </div>
      </div>
    </div>
  );
}