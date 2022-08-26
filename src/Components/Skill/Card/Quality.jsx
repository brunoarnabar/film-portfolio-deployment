import "./card.scss";
import { MdOutlineDevices } from "react-icons/md";
import {GiFilmProjector} from "react-icons/gi";
export default function Quality(props) {

    let icon;

    if (props.compSciIcon) { 
        icon = <MdOutlineDevices size={100}/>;
    } else {      
        icon = <GiFilmProjector size={100}/>;    
    }

  return(
    <div className="insideCard">
      <div className="cardIcon"> 
        {icon}
      </div>
        <div className="cardTitle">{props.title}</div>
        <div className="cardCol1">
          <div className="list">
            <div className="listItem">{props.oneOne}</div>
            <div className="listItem">{props.oneTwo}</div>
            <div className="listItem">{props.oneThree}</div>
          </div>
        </div>
        <div className="cardCol2">
          <div className="list">
            <div className="listItem">{props.twoOne}</div>
            <div className="listItem">{props.twoTwo}</div>
            <div className="listItem">{props.twoThree}</div>
          </div>
        </div>
      </div>
  )
}