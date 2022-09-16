import React, { useState } from "react";
import "./contact.scss";
import Modal from "react-modal";
import Form from "./Form/Form";
Modal.setAppElement("#root");

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

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
          To reach out to me, click the following:
        </div>
        <div className="ContactOptionBlock" onClick={openModal}>
          Contact Form
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal()}
        className="Modal"
        overlayClassName="ContactOverlay"
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
        <div className="ContactFormHeader">
          <div className="ContactFormTopTitle fs-title">Contact Form</div>
        </div>
        <div className="ContactFormContainer">
          <Form closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}