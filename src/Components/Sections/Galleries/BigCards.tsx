import "./BigCards.scss";

import React from "react";
import DateFormatter from "../../Functions/DateFormatter";
import Divider_Wave from "../../Divider/Wave";
import Template_Page from "../../../Pages/_Templates/Template_Page";

interface Props {
  posts: Template_Page[];
}

const Gallery_BigCards: React.FC<Props> = ({ posts }) => {
  return (
    <div className="gallery-big-cards">
      <div className="container">
        {posts.map((item: Template_Page, i: number) => (
          <a key={`${item}${i}`} href={`/${item.info.key}`} className={`card`}>
            <div className="cover">
              <div className="container">
                <img
                  src={item.info.cover}
                  alt={`cover of ${item.info.title}`}
                />
              </div>
            </div>
            <div className="info">
              <div className="container">
                <div className="label">
                  {item.info.label != undefined ? (
                    <>{item.info.label}</>
                  ) : (
                    ""
                  )}
                </div>
                <div className="title">{item.info.title}</div>
                <div className="brief">{item.info.brief}</div>
                <div className="caption">
                  {item.info.authors != undefined ? (
                    <>
                      <span className="author-0">
                        {item.info.authors[0].data.info.title}{` · `}
                      </span>
                    </>
                  ) : ""}

                  <span>
                    <DateFormatter
                      date={item.info.latest_update}
                      language={"zh"}
                    />
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Divider_Wave />
    </div>
  );
};

export default Gallery_BigCards;
