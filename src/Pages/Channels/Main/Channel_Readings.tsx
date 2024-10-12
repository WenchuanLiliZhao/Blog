import Gallery_BigCards from "../../../Components/Sections/Galleries/BigCards";
import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import PageSection from "../../../Components/Sections/PageSection";
import SiteInfo from "../../../SiteInfo";
// import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
// import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Readings: Template_Page = {
  info: {
    title: "閱讀",
    key: "nblib",
    title_display: <>閱讀</>,
    brief: "「閱讀使人充實，會談使人敏捷，寫作與筆記使人精確。」",
    // label: `${SiteInfo.title}`,
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <PageSection title={" "} brief={" "}>
        <Gallery_BigCards posts={[Posts.Post_84, Posts.Post_92,]} />
      </PageSection>

      <PageSection
        title="閱讀活動"
        brief="探索中華文化的奇趣魅力，開啟一段全新旅程"
      >
        <Gallery_MediumCards
          columnCount={3}
          posts={[
            Posts.Post_95,
            Posts.Post_94,
            Posts.Post_89,
          ]}
        />
      </PageSection>

      <PageSection title={" "} brief={" "}>
        <Gallery_BigCards posts={[Posts.Post_91, Posts.Post_88]} />
      </PageSection>
    </>
  ),
};

export default Channel_Readings;
