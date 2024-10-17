import "./PostLayout.scss";

import React from "react";
import Template_Page from "../Template_Page";
import PageBody from "../_Template_PageBody";
import Tag from "../../../Components/Inlines/Tag";
import Divider_Wave from "../../../Components/Divider/Wave";
import SiteInfo from "../../../SiteInfo";
import Template_Author from "../Template_AuthorInPost";
import DateFormatter from "../../../Components/Functions/DateFormatter";
import ContentMapper from "../../../Components/Functions/ContentMapper";
// import ContentMapper from "../../../Components/Functions/ContentMapper";
import { Helmet } from "react-helmet-async";

interface Props {
  data: Template_Page;
}

const PostLayout: React.FC<Props> = ({ data }) => {
  const showAuthors = data.info.authors != undefined;

  return (
    <>
      <Helmet>
        {/* Example meta tags; customize these as needed */}
        <title>{SiteInfo.title} :: {data.info.title}</title>
        <meta name="description" content={data.info.brief} />
      </Helmet>
      <PageBody>
        <div className="post-layout">
          {data.info.front != null ? data.info.front : <></>}

          <div className="post-header">
            <div className="container">
              {data.info.label != null ? (
                <>
                  <div className="label">{data.info.label}</div>
                </>
              ) : (
                <>
                  <div className="label">{SiteInfo.title}</div>
                </>
              )}
              <h1 className="title font-size--h1">
                {data.info.title_display != undefined
                  ? data.info.title_display
                  : data.info.title}
              </h1>
              <div className="brief">{data.info.brief}</div>
              {showAuthors ? (
                <div className="caption">
                  <span className="authors">
                    {data.info.authors?.map(
                      (item: Template_Author, i: number) => (
                        <span className="author" key={`${item}${i}`}>
                          <span className="name">{item.data.info.title}</span>
                        </span>
                      )
                    )}
                  </span>
                  <span className="latest_update">
                    {` · `}
                    <DateFormatter
                      date={data.info.latest_update}
                      language={"en"}
                    />
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <article className="post-body">
            <section>
              <ContentMapper content={data.content} />
            </section>
          </article>

          <div className="end">
            <div className="article-tags">
              <div className="container">
                {data.info.tags != undefined ? (
                  <>
                    {data.info.tags.map((item: Template_Page, i: number) => (
                      <Tag key={`${item}${i}`} data={item} size={14} />
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Divider_Wave />
          </div>
        </div>
      </PageBody>
    </>
  );
};

export default PostLayout;
