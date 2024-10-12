import PageList from "../../../Components/Search/PageList";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Search: Template_Page = {
  info: {
    title: "搜索",
    key: "search",
    title_display: (<>站內搜索</>),
    brief: "",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (<>
    <PageList pages={Posts} />
  </>)
}

export default Channel_Search