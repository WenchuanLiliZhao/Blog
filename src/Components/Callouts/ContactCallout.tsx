import React, { useEffect, useState } from "react";
import "./ContactCallout.scss";
import SiteInfo from "../../SiteInfo";

interface Props {
  icon?: string;
  title?: string;
  caption?: string | JSX.Element;
}

const ContactCallout: React.FC<Props> = ({ icon, title, caption }) => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const staticPartEl = document.querySelector(
        ".static-part"
      ) as HTMLElement;
      if (!staticPartEl) return;

      const staticPartOffsetTop =
        staticPartEl.getBoundingClientRect().top + window.scrollY;
      const windowHeight = window.innerHeight;

      if (staticPartOffsetTop <= window.scrollY + windowHeight * 0.9) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lili-contact-bubble" id="contact-bubble">
      <div className={`static-part ${isHidden ? "highlighted" : ""}`}>
        <div className="icon-container">
          <div className="icon">{icon != undefined ? icon : "🙋🏻‍♀️"}</div>
        </div>

        <div className="info">
          <div className="info-header">
            <div className="title ff-serif">
              {title != undefined ? title : "資訊相關服務 & 產品"}
            </div>

            <div className="caption">
              {caption != undefined
                ? caption
                : "我們將為你策劃及提供最好、最有想象力的中華文化教育活動及展出。"}
            </div>
          </div>

          <div className="other-info">
            <div className="item">
              <span className="title">{SiteInfo.contact.address.title}：</span>
              <span className="info">{SiteInfo.contact.address.info}</span>
            </div>

            <div className="item">
              <span className="title">{SiteInfo.contact.phone.title}：</span>
              <span className="info">{SiteInfo.contact.phone.info}</span>
            </div>

            <div className="item">
              <span className="title">{SiteInfo.contact.mail.title}：</span>
              <span className="info">{SiteInfo.contact.mail.info}</span>
            </div>

            <div className="item">
              <span className="title">WhatsApp：</span>
              <a
                href={SiteInfo.contact.whatsApp.info}
                className="info"
                target="_blank"
              >
                {SiteInfo.contact.whatsApp.title}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed-part ${isHidden ? "hidden" : ""}`}>
        <a className="container" href="#contact-bubble">
          <div className="icon-container">
            <div className="icon">{icon != undefined ? icon : "🙋🏻‍♀️"}</div>
          </div>

          <div className="info">
            <div className="title ff-serif">
              {title != undefined ? title : "資訊相關服務 & 產品"}
            </div>

            <div className="caption">
              {caption != undefined
                ? caption
                : "我們將為你策劃及提供最好、最有想象力的中華文化教育活動及展出。"}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactCallout;
