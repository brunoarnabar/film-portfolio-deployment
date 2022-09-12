import React, { useState } from "react";
import "./contact.scss";
import DirImg from "../../Images/ListIcons/filmDir.jpg";
import DevImg from "../../Images/ListIcons/webDev.jpg";
import HeyImg from "../../Images/ListIcons/sayHey.jpg";
import Modal from "react-modal";
import FormCon from "./FormContainer/FormCon";
Modal.setAppElement("#root");

export default function Contact() {

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const [dirModalIsOpen, setDirModalIsOpen] = useState(false);
  // const openModalOne = () => {
  //   setDirModalIsOpen(true);
  //   document.body.style.overflow = "hidden";
  //   setOne((current) => !current);
  // };

  // const openModalTwo = () => {
  //   setDirModalIsOpen(true);
  //   document.body.style.overflow = "hidden";
  //   setTwo((current) => !current);
  // };

  // const openModalThree = () => {
  //   setDirModalIsOpen(true);
  //   document.body.style.overflow = "hidden";
  //   setThree((current) => !current);
  // };

  const closeModal = () => {
    setDirModalIsOpen(false);
    document.body.style.overflow = "unset";
    setOne(false);
    setTwo(false);
    setThree(false);
  };

function outputHTML(one, two, three) {
    if (!one & !two & !three) return null;
    else if (one) {
      return (
        <div className="List">
          <div className="Option formHead">
            <div className="OptImg">
              <img src={DirImg} alt="DirImg" className="ListImg" />
            </div>
            <div className="OptPromt">
              I want to work with you as a director.
            </div>
          </div>
        </div>
      );
    } else if (two) {
      return (
        <div className="List">
          <div className="Option formHead">
            <div className="OptImg">
              {" "}
              <img src={DevImg} alt="DevImg" className="ListImg" />{" "}
            </div>
            <div className="OptPromt">
              {" "}
              I want to work with you as a developer.{" "}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="List">
          <div className="Option formHead hey">
            <div className="OptImg">
              {" "}
              <img src={HeyImg} alt="HeyImg" className="ListImg" />{" "}
            </div>
            <div className="OptPromt formHead"> I just want to say hello. </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="ContactContainer" id="contact">
      {/* <div className="BackdropCo"> */}
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="sectionHeading noMarginBot">
        <div className="heading text-neutral-400">CONTACT</div>
        <div className="subHeading wrap-lg text-neutral-200">
          Let's Get In&nbsp;Touch
        </div>
      </div>
      <div className="ContactContent">
        <div className="fs-body text-neutral-400">
          To make an inquiry about a project, please select from the following:
        </div>
        <div className="ContactOptionBlock fs-body">
          Employ Me As A Developer
        </div>
        <div className="ContactOptionBlock fs-body">Hire Me As A Director</div>
        <div className="ContactOptionBlock fs-body">
          Just Reach Out To Say Hello
        </div>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* <div className="HeadingCo fs-title"> Get In Touch </div>
        <div className="Message-con First-con">
          {" "}
          To make an inquiry about a project, please select from the following
          options:{" "}
        </div>
        <br />

        <div className="List OneDir">
          <button onClick={openModalOne} className="Option">
            <div className="OptImg">
              {" "}
              <img src={DirImg} alt="DirImg" className="ListImg" />{" "}
            </div>
            <div className="OptPromt">
              {" "}
              I want to work with you as a director.{" "}
            </div>
          </button>
        </div>

        <div className="List TwoDir">
          <button onClick={openModalTwo} className="Option">
            <div className="OptImg">
              {" "}
              <img src={DevImg} alt="DevImg" className="ListImg" />{" "}
            </div>
            <div className="OptPromt">
              {" "}
              I want to work with you as a developer.{" "}
            </div>
          </button>
        </div>

        <div className="List ThreeDir">
          <button onClick={openModalThree} className="Option">
            <div className="OptImg">
              {" "}
              <img src={HeyImg} alt="HeyImg" className="ListImg" />{" "}
            </div>
            <div className="OptPromt HelloOpt"> I just want to say hello. </div>
          </button>
        </div> */}
      <Modal
        isOpen={dirModalIsOpen}
        onRequestClose={() => closeModal()}
        className="Modal"
        overlayClassName="Overlay"
        onAfterOpen={() => {
          document.body.style.top = `-${window.scrollY}px`;
          document.body.style.position = `fixed`;
        }}
        onAfterClose={() => {
          const scrollY = document.body.style.top;
          document.body.style.position = "";
          document.body.style.top = "";
          window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }}
      >
        <div className="formHeader">
          <div>{outputHTML(one, two, three)}</div>
        </div>
        <div className="form-container-contact">
          <FormCon className="formStyle" closeModal={closeModal} />
        </div>
      </Modal>
      {/* </div> */}
    </div>
  );
}