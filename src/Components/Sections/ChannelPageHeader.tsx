import Template_Page from "../../Pages/_Templates/Template_Page";
import "./ChannelPageHeader.scss";

interface Props {
  page: Template_Page;
}

const ChannelPageHeader: React.FC<Props> = ({ page }) => {
  if (page.info.showHeader != false) {
    return (
      <>
        <div className="channel-page-header">
          <div className="container">
            {page.info.label != null ? (
              <>
                <div className="label">{page.info.label}</div>
              </>
            ) : (
              <></>
            )}
            <h1 className="title font-size--h1">{
              page.info.title_display != undefined ?
              page.info.title_display :
              page.info.title
              }</h1>
            <div className="brief">{page.info.brief}</div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ChannelPageHeader;
