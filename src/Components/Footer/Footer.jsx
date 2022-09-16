import React from "react";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandVimeo,
  TbBrandYoutube,
} from "react-icons/tb";
import { GiFilmSpool } from "react-icons/gi";
import "./footer.scss";

function Footer() {
  return (
    <div className="FooterContainer text-neutral-400">
      <div className="FooterTopDiv">
        <div className="FooterSoc">
          <div className="FooterTitle fs-logline ff-heading">Social</div>
          <div className="FooterText fs-logline text-neutral-400">
            <a href="https://www.instagram.com/bruno.arnabar/">
              <TbBrandInstagram />
            </a>
            <a href="https://www.linkedin.com/in/brunoarnabar/">
              <TbBrandLinkedin />
            </a>
            <a href="https://github.com/bra40?tab=repositories">
              <TbBrandGithub />
            </a>
            <a href="https://vimeo.com/brunoarnabar">
              <TbBrandVimeo />
            </a>
            <a href="https://youtube.com/channel/UCHmzU48QCUVIF9VeTr4f7bg">
              <TbBrandYoutube />
            </a>
            <a href="https://letterboxd.com/brunardothegoat/">
              <GiFilmSpool />
            </a>
          </div>
        </div>
        <div className="FooterAbout">
          <div className="FooterTitle fs-logline ff-heading">Bruno Arnabar</div>
          <div className="FooterText fs-body">
            Creative programmer. Filmmaker.
          </div>
        </div>
      </div>
      <div className="FooterBotDiv">
        <div className="FooterDivider" />
        <div className="FooterCopyright">
          <div className="FooterClosingTag fs-label">
            © Copyright {new Date().getFullYear()}. Created by&nbsp;
            <a href="#top" className="FooterUnderline">
              Bruno Arnabar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
