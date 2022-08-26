import "./roulette.scss";
export default function Steps(props) {
  return(
    <div className="insideRoulette">
        <div className="steps">{props.steps}</div>
        <div className="examples">
          <div className="list">
            <li className="listItem">{props.ex1}</li>
            <li className="listItem">{props.ex2}</li>
            <li className="listItem">{props.ex3}</li>
          </div>
        </div>
      </div>
  )
}