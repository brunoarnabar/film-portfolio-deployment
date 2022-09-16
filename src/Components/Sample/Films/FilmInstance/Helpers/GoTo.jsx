import React from "react";
import { useGoToContactContext } from "../../../../../Contexts/GoToContactContext";
import { useGoToAboutContext } from "../../../../../Contexts/GoToAboutContext";
import { useAboutClickerContext } from "../../../../../Contexts/AboutClickerContext";
import { useContactClickerContext } from "../../../../../Contexts/ContactClickerContext";

export default function GoTo({ location }) {
  const { setAtAbout } = useGoToAboutContext();
  const { setAtContact } = useGoToContactContext();
  const { setContactClicked } = useContactClickerContext();
  const { setAboutClicked } = useAboutClickerContext();

  function handleAbout() {
    console.log("about was fired");
    setAtAbout(false);
    setAboutClicked(true);
  }

  function handleContact() {
    console.log("contact was fired");
    setAtContact(false);
    setContactClicked(true);
  }

  if (location === "About") {
    return (
      <div onClick={() => handleAbout()}>
        <div className="title text-primary-900 pointer">About</div>
      </div>
    );
  } else if (location === "Contact") {
    return (
      <div onClick={() => handleContact()}>
        <div className="title text-primary-900 pointer">Contact</div>
      </div>
    );
  }
}
