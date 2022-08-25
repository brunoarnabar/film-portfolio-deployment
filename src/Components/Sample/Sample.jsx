import "./sample.scss";

import imggy from "../../Video/Thumbnail/theBox.png";
import giffy from "../../Video/Preview/theBox.gif";
import Refactor from "./Helpers/Refactor";

const Greenless = {
  key: 1,
  title: "Greenless",
  date: "05-22-2000",
  gif: giffy,
  img: imggy
};

const TheBox = {
  key: 2,
  title: "The Box",
  date: "03-23-2010",
  gif: giffy,
  img: imggy
};

const Three = {
  key: 3,
  title: "Three",
  date: "03-03-2033",
  gif: giffy,
  img: imggy
};

const Four = {
  key: 4,
  title: "Four",
  date: "04-04-2014",
  gif: giffy,
  img: imggy
};

export default function Samples() {
  return (
    <div className="sample-container">
      <div className="head">
        <div className="SampleName">Bruno Arnabar</div>
        <div className="sampleMenu">Menu</div>
      </div>

      <div className="bod">
        <Refactor {...Greenless} />
        <Refactor {...TheBox} />
        <Refactor {...Three} />
        <Refactor {...Four} />
      </div>

      <div className="foot"></div>
    </div>
  );
}
