import React from "react";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandVimeo,
  TbBrandYoutube,
} from "react-icons/tb";
import "./footer.scss";

function Footer() {
  return (
    <div className="FooterContainer text-neutral-400">
      <div className="FooterTopDiv">
        <div className="FooterSoc">
          <div className="fs-logline ff-heading FooterTitle">Social</div>
          <div className="fs-logline text-neutral-400 FooterText">
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
          </div>
        </div>
        <div className="FooterAbout">
          <div className="fs-logline ff-heading FooterTitle">Bruno Arnabar</div>
          <div className="fs-body FooterText">
            Creative programmer. Filmmaker.
          </div>
        </div>
      </div>
      <div className="FooterBotDiv">
        <div className="FooterDivider" />
        <div className="FooterCopyright">
          <div className="fs-label FooterClosingTag">
            © Copyright {new Date().getFullYear()}. Created by&nbsp;
            <a href="#top" className="FooterUnderline">
              Bruno Arnabar
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div>Footer</div>
  );
}

export default Footer;
