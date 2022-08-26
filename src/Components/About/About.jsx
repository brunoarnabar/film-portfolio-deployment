import "./about.scss";
import React from "react";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutTitle">
        <div>ABOUT</div>
        <div>Let Me Introduce Myself</div>
      </div>

      <div className="aboutContent">
        <div className="aboutEnjoy">
          <div className="aboutSub">I enjoy...</div>
          {/* Helper component here */}
          <div className="boxImg"></div> <s />
          <div className="boxImg"></div> <s />
          <div className="boxImg"></div> <s />
        </div>

        <div className="aboutDesc">
          <div className="aboutSub"> Hey! </div>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dicta aspernatur neque maiores architecto reiciendis, id laboriosam
            officia, quas, incidunt veritatis soluta placeat aut tempore
            voluptatum dolor omnis voluptates ad.{" "}
          </div>
          <div className="aboutSub pad__top"> I find inspiration in... </div>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dicta aspernatur neque maiores architecto reiciendis, id laboriosam
            officia, quas, incidunt veritatis soluta placeat aut tempore
            voluptatum dolor omnis voluptates ad.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
