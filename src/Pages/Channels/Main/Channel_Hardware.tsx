import SiteInfo from "../../../SiteInfo";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";

const Channel_Hardware: Template_Page = {
  info: {
    title: "裝備",
    key: "hardware",
    title_display: <>裝備</>,
    brief:
      "我們即將推出一個全新的精彩頻道，為您帶來更多豐富有趣的內容。敬請期待更多的驚喜！我們正在為您精心準備，確保每一個細節都完美無瑕。請隨時關注我們的最新消息，並不要忘記訂閱我們的通知，第一時間了解頻道的上線信息。謝謝您的耐心等待！",
    // label: `${SiteInfo.title}`,
    label: "Coming Soon",
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <Sec>
        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/7a/4f/cb/7a4fcbadc6b83c9ec432c4799d6aa03a.jpg"
              alt=""
            />
          }
          caption={
            <>
              Photo by{" "}
              <a href="https://unsplash.com/@xavi_cabrera?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Xavi Cabrera
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/gray-and-black-camera-on-teal-surface-HBfsGeRE4gU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </a>
            </>
          }
        />
      </Sec>
    </>
  ),
};

export default Channel_Hardware;
