import React, { useState, useCallback } from "react";
import "./contact.scss";
import Modal from "react-modal";
import FormCont from "./FormContainer/FormCont";
Modal.setAppElement("#root");

export default function Contact() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const [dirModalIsOpen, setDirModalIsOpen] = useState(false);
  const [showFullForm, setShowFullForm] = useState(false);

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
    setDirModalIsOpen(true);
    document.body.style.overflow = "hidden";
    setThree((current) => !current);
  };

  const closeModal = () => {
    setDirModalIsOpen(false);
    document.body.style.overflow = "unset";
    setOne(false);
    setTwo(false);
    setThree(false);
  };

  function outputHTML(one, two, three) {
    let contactFormTitle = "";

    if (!one & !two & !three) return null;
    else if (one) {
      contactFormTitle = "Director Form";

      useCallback(() => {
        setShowFullForm(true);
      }, []); 

    } else if (two) {
      contactFormTitle = "Developer Form";

      useCallback(() => {
        setShowFullForm(true);
      }, []); 

    } else {
      contactFormTitle = "Just Saying Hello";
      
      useCallback(() => {
        setShowFullForm(false);
      }, []); 

    }

    return (
      <div className="ContactFormTopTitle fs-title">
        {contactFormTitle}
      </div>
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
          <FormCont
            className="formStyle"
            closeModal={closeModal}
            employer={showFullForm}
          />
        </div>
      </Modal>
    </div>
  );
}
