import SocialMedia from "../../InfoTemplates/SocialMedia";
import Template_Page from "../../Pages/_Templates/Template_Page";
import Channels from "../../Pages/Channels/_Channels";
import Posts from "../../Pages/Posts/_Posts";
import SiteInfo from "../../SiteInfo";
import Divider_LatestUpdate from "../Divider/LatestUpdate";
import "./Footer.scss";

const footerChannels = [
  Channels.Channel_Home,
  Channels.Channel_Activity,
  Channels.Channel_Readings,
];

const footerSocialMedia = Object.values(SiteInfo.social_medias);

const footerOthers = [
  Channels.Channel_About,
  Posts.Post_Privacy,
  Posts.Post_TermsOfUse,
];

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <Divider_LatestUpdate date={SiteInfo.latest_update} language={"en"} />

        <div className="foot-body">
          <div className="site-info">
            <div className="logo">
              {/* <div className="image">
                <img src={SiteInfo.logo.image} alt="" />
              </div> */}
              <div className="text">{SiteInfo.logo.text}</div>
            </div>
            <div className="brief">{SiteInfo.brief}</div>
          </div>

          <div className="links">
            <div className="group">
              <div className="title">推薦頻道</div>
              {footerChannels.map((item: Template_Page, i: number) => (
                <a
                  key={`${item}${i}`}
                  href={`/${item.info.key}`}
                  className="item"
                >
                  {item.info.title}
                </a>
              ))}
            </div>

            <div className="group">
              <div className="title">社交媒體</div>
              {footerSocialMedia.map((item: SocialMedia, i: number) => (
                <a
                  key={`${item}${i}`}
                  href={`${item.link}`}
                  className="item"
                  target="_blank"
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="group">
              <div className="title">其他</div>
              {footerOthers.map((item: Template_Page, i: number) => (
                <a
                  key={`${item}${i}`}
                  href={`/${item.info.key}`}
                  className="item"
                >
                  {item.info.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="end">{SiteInfo.copyright}</div>
      </footer>
    </>
  );
}
