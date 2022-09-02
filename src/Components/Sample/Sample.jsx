import "./sample.scss";
import imggy from "../../Video/Thumbnail/theBox.png";
import giffy from "../../Video/Gifs/theBox.gif";
import Preview from "./Helpers/Preview";

const Greenless = {
  key: 1,
  title: "Greenless",
  date: "05-22-2000",
  gif: giffy,
  img: imggy,
};

const TheBox = {
  key: 2,
  title: "The Box",
  date: "03-23-2010",
  gif: giffy,
  img: imggy,
};

const Three = {
  key: 3,
  title: "Three",
  date: "03-03-2033",
  gif: giffy,
  img: imggy,
};

const Four = {
  key: 4,
  title: "Four",
  date: "04-04-2014",
  gif: giffy,
  img: imggy,
};

export default function Samples() {
  return (
    <div className="SampleContainer" id="sample">
      <div className="sectionHeading noMarginBot">
        <div className="heading text-neutral-400">SAMPLES</div>
        <div className="subHeading wrap-lg text-neutral-200">
          Check&nbsp;Out My&nbsp;Work
        </div>
      </div>
      <div className="SamplePreviewContainers text-neutral-400">
        {/* <Preview className="SamplePreview" {...Greenless} />
        <Preview className="SamplePreview" {...Three} /> */}
        <div className="SamplePreview fs-heading">
          <Preview {...Greenless} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...TheBox} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...Three} />
        </div>
        <div className="SamplePreview fs-heading">
          <Preview {...Four} />
        </div>

        {/* <Preview {...Greenless} />
        
        
         */}
      </div>
    </div>
  );
}
