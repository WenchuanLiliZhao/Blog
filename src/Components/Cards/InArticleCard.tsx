import "./InArticleCard.scss";

import Template_Page from "../../Pages/_Templates/Template_Page";
import DateFormatter from "../Functions/DateFormatter";

interface Props {
  data: Template_Page;
}

const InArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      <a href={`/${data.info.key}`} className="in-article-card">
        <div className="cover">
          <img src={data.info.cover} alt="" />
        </div>
        <div className="info">
          <div className="container">
            {data.info.label != undefined ? (
              <div className="label">{data.info.label}</div>
            ) : (
              ""
            )}
            <div className="title">{data.info.title}</div>
            <div className="brief">{data.info.brief}</div>
            <div className="caption">
              {data.info.authors != undefined ? (
                <>
                  <span className="author-0">
                    {data.info.authors[0].data.info.title}
                    {` · `}
                  </span>
                </>
              ) : (
                ""
              )}
              <span>
                <DateFormatter date={data.info.latest_update} language={"zh"} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default InArticleCard;
