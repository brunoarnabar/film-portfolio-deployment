import React, { useState } from "react";
import "./contact.scss";
import DirImg from "../../Images/ListIcons/filmDir.jpg";
import DevImg from "../../Images/ListIcons/webDev.jpg";
import HeyImg from "../../Images/ListIcons/sayHey.jpg";
import Modal from "react-modal";
import FormCont from "./FormContainer/FormCont";
import FormContHello from "./FormContainer/FormContHello";
Modal.setAppElement("#root");

export default function Contact() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const [dirModalIsOpen, setDirModalIsOpen] = useState(false);
  const [helloModalIsOpen, setHelloModalIsOpen] = useState(false);

  const openModalOne = () => {
    setDirModalIsOpen(true);
    document.body.style.overflow = "hidden";
    setOne((current) => !current);
  };

  const openModalTwo = () => {
    setDirModalIsOpen(true);
    document.body.style.overflow = "hidden";
    setTwo((current) => !current);
  };

  const openModalThree = () => {
    setHelloModalIsOpen(true);
    document.body.style.overflow = "hidden";
    setThree((current) => !current);
  };

  const closeModal = () => {
    setDirModalIsOpen(false);
    setHelloModalIsOpen(true);
    document.body.style.overflow = "unset";
    setOne(false);
    setTwo(false);
    setThree(false);
  };

  function outputHTML(one, two, three) {
    // if (!one & !two & !three) return null;
    // else if (one) {
    //   return (
    //     <div className="ContactList fs-label">
    //       <div className="ContactOption ContactFormHeader">
    //         <div className="ContactOptionImg">
    //           <img src={DirImg} alt="DirImg" className="ContactListImg" />
    //         </div>
    //         <div className="ContactOptionPrompt">
    //           I want to work with you as a director.
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else if (two) {
    //   return (
    //     <div className="ContactList fs-label">
    //       <div className="ContactOption ContactFormHeader">
    //         <div className="ContactOptionImg">
    //           {" "}
    //           <img src={DevImg} alt="DevImg" className="ContactListImg" />{" "}
    //         </div>
    //         <div className="ContactOptionPrompt">
    //           {" "}
    //           I want to work with you as a developer.{" "}
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="ContactList fs-label">
    //       <div className="ContactOption ContactFormHeader hey">
    //         <div className="ContactOptionImg">
    //           {" "}
    //           <img src={HeyImg} alt="HeyImg" className="ContactListImg" />{" "}
    //         </div>
    //         <div className="ContactOptionPrompt ContactFormHeader">
    //           {" "}
    //           I just want to say hello.{" "}
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    let contactFormTitle = "";

    if (!one & !two & !three) return null;
    else if (one) {
      contactFormTitle = "Director Form";
    } else if (two) {
      contactFormTitle = "Developer Form";
    } else {
      contactFormTitle = "Just Saying Hello";
    }

    return (
      // <div className="ContactList fs-label">
      //   <div className="ContactOption ContactFormHeader hey">
      //     <div className="ContactOptionImg">
      //       {" "}
      //       <img src={HeyImg} alt="HeyImg" className="ContactListImg" />{" "}
      //     </div>
      //     <div className="ContactOptionPrompt ContactFormHeader"> . </div>
      //   </div>
      // </div>

      // <div className="ContactFormTop fs-body">
      // {/* <div class="circle">
      //   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chapultepec_Zoo_-_Jaguar_%2802%29.jpg/2560px-Chapultepec_Zoo_-_Jaguar_%2802%29.jpg" />
      // </div> */}
      // {/* <div class="ContactSquare">
      //   <div class="ContactSquareImg">Hello!</div>
      // </div> */}
      // {/* <div className="ContactFormTopImg">
      //   <img src={contactFormImg} alt="FormImg" className="ContactListImg" />
      // </div> */}
      <div className="ContactFormTopTitle fs-title">
        {contactFormTitle}
      </div>
      // </div>
    );
  }

  return (
    <div className="ContactContainer" id="contact">
      <div className="sectionHeading noMarginBot">
        <div className="heading text-neutral-400">CONTACT</div>
        <div className="subHeading wrap-lg text-neutral-200">
          Let's Get In&nbsp;Touch
        </div>
      </div>
      <div className="ContactContent fs-body">
        <div className="text-neutral-400">
          To make an inquiry about a project, please select from the following:
        </div>
        <div className="ContactOptionBlock" onClick={openModalTwo}>
          Employ Me As A Developer
        </div>
        <div className="ContactOptionBlock" onClick={openModalOne}>
          Hire Me As A Director
        </div>
        <div className="ContactOptionBlock" onClick={openModalThree}>
          Just Reach Out To Say Hello
        </div>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      {/* <div className="HeadingCo fs-body"> Get In Touch </div>
        <div className="Message-con First-con">
          {" "}
          To make an inquiry about a project, please select from the following
          options:{" "}
        </div>
        <br />

        <div className="List OneDir">
          <button onClick={openModalOne} className="Option">
            <div className="ContactOptionImg">
              {" "}
              <img src={DirImg} alt="DirImg" className="ContactListImg" />{" "}
            </div>
            <div className="ContactOptionPrompt">
              {" "}
              I want to work with you as a director.{" "}
            </div>
          </button>
        </div>

        <div className="List TwoDir">
          <button onClick={openModalTwo} className="Option">
            <div className="ContactOptionImg">
              {" "}
              <img src={DevImg} alt="DevImg" className="ContactListImg" />{" "}
            </div>
            <div className="ContactOptionPrompt">
              {" "}
              I want to work with you as a developer.{" "}
            </div>
          </button>
        </div>

        <div className="List ThreeDir">
          <button onClick={openModalThree} className="Option">
            <div className="ContactOptionImg">
              {" "}
              <img src={HeyImg} alt="HeyImg" className="ContactListImg" />{" "}
            </div>
            <div className="ContactOptionPrompt HelloOpt"> I just want to say hello. </div>
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
        <div className="ContactFormHeader">{outputHTML(one, two, three)}</div>
        <div className="form-container-contact">
          <FormCont className="formStyle" closeModal={closeModal} />
        </div>
      </Modal>
      {/* </div> helloModalIsOpen*/}
      {/* <Modal
        isOpen={helloModalIsOpen}
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
        <div className="ContactFormHeader">{outputHTML(one, two, three)}</div>
        <div className="form-container-contact">
          <FormContHello className="formStyle" closeModal={closeModal} />
        </div>
      </Modal> */}
    </div>
  );
}
