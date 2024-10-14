import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import Section_NewsClipping from "../../../Components/Sections/NewsClipping";
import PageSection from "../../../Components/Sections/PageSection";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Home: Template_Page = {
  info: {
    title: "首頁",
    key: "",
    brief: `${SiteInfo.brief}`,
    title_display: <>{SiteInfo.title}</>,
    label: `聯合電子出版`,
    latest_update: SiteInfo.latest_update,
    front: (
      <Section_NewsClipping className="only-show-above-screen-size-1000" />
    ),
  },

  content: (
    <>

      <PageSection
        title="最新動態"
        brief="探索中華文化的奇趣魅力，開啟一段全新旅程"
      >
        <Gallery_MediumCards
          columnCount={3}
          posts={[
            Posts.Post_3
          ]}
        />
      </PageSection>

      

      <Section_NewsClipping className="only-show-below-screen-size-1000" />
    </>
  ),
};

export default Channel_Home;