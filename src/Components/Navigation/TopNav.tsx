import "./TopNav.scss";

import Template_Page from "../../Pages/_Templates/Template_Page";
import NavLink2Top from "../Links/NavLink2Top";
import SiteInfo from "../../SiteInfo";
import Channels from "../../Pages/Channels/_Channels";
import { toggleClass } from "../Functions/ToggleClassName";
import SocialMedia from "../../InfoTemplates/SocialMedia";

const channels = [
  Channels.Channel_Home,
  Channels.Channel_Activity,
  Channels.Channel_Readings,
  
  Channels.Channel_Hardware,
  Channels.Channel_Resource,
  Channels.Channel_About,
];

const socialMedia = Object.values(SiteInfo.social_medias);

export default function TopNav() {
  return (
    <>
      <div className="top-nav">
        <div className="mask-left"></div>
        <div className="mask-right"></div>
        <a href="/" className="top-nav-logo">
          {/* <div className="top-nav-logo-image">
            <img src={SiteInfo.logo.image} alt="" />
          </div> */}
          <div className="top-nav-logo-text">{SiteInfo.logo.text}</div>
        </a>

        <div className="top-nav-items">
          {channels.map((item: Template_Page, i: number) => (
            <NavLink2Top
              to={`/${item.info.key}`}
              className="top-nav-item channel hide-in-small-screen"
              key={`${item}${i}`}
            >
              <div className="container">
                <div className="deco"></div>
                <div className="text">{item.info.title}</div>
                <div className="deco sensitive"></div>
              </div>
            </NavLink2Top>
          ))}

          {/* <NavLink2Top
            className="top-nav-item icon-item"
            to={`/${Channels.Channel_Search.info.key}`}
          >
            <div className="material-symbols-outlined icon search">search</div>
          </NavLink2Top> */}

          <div
            className="top-nav-item icon-item menu"
            onClick={toggleClass("activated")}
          >
            <div className="material-symbols-outlined icon">menu</div>

            <div className="menu-bg-btn"></div>

            <div className="menu-body">
              <div className="container">
                <div className="group">
                  <div className="title">頻道</div>
                  {channels.map((item: Template_Page, i: number) => (
                    <NavLink2Top
                      className="item"
                      key={`${item}${i}`}
                      to={`/${item.info.key}`}
                      children={item.info.title}
                    />
                  ))}
                </div>

                <div className="group">
                  <div className="title">社交媒體</div>

                  {socialMedia.map((item: SocialMedia, i: number) => (
                    <NavLink2Top
                      className="item"
                      key={`${item}${i}`}
                      to={item.link}
                      children={item.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
