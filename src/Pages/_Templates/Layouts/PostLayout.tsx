import "./PostLayout.scss";

import React from "react";
import Template_Page from "../Template_Page";
import PageBody from "../_Template_PageBody";
import SiteInfo from "../../../SiteInfo";
import Template_Author from "../Template_Author";
import { DateFormatter } from "../../../Components/Functions/DateHandling";
import ContentMapper from "../../../Components/Functions/ContentMapper";
// import ContentMapper from "../../../Components/Functions/ContentMapper";
import LiliHelmet from "../../../Components/Functions/LiliHelmet";

interface Props {
  data: Template_Page;
}

const PostLayout: React.FC<Props> = ({ data }) => {
  const showAuthors = data.info.authors != undefined;

  console.log(data.info.inbook != undefined ? data.info.inbook.coverPage.info.title : "")

  return (
    <>
      <LiliHelmet data={data} />
      <PageBody>
        <div className="post-layout">
          {data.info.front != null ? data.info.front : <></>}

          <header className="post-header">
            <div className="container">
              {data.info.type != null ? (
                <>
                  <div className="label">{data.info.type}</div>
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
          </header>

          <article className="post-body">
            <section>
              <ContentMapper content={data.content} />
            </section>
          </article>

        </div>
      </PageBody>
    </>
  );
};

export default PostLayout;
