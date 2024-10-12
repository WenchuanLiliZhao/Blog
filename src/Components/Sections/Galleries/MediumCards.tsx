import Template_Page from "../../../Pages/_Templates/Template_Page";
import Divider_Wave from "../../Divider/Wave";
import DateFormatter from "../../Functions/DateFormatter";
import "./MediumCards.scss";

interface Props {
  columnCount: 3 | 4;
  posts: Template_Page[];
}

const Gallery_MediumCards: React.FC<Props> = ({ columnCount, posts }) => {
  return (
    <div className="gallery-medium-cards">
      <div
        className="container"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        }}
      >
        {posts.map((item: Template_Page, i: number) => (
          <a className="card" key={`${item}${i}`} href={`/${item.info.key}`}>
            <div className="cover">
              <img src={item.info.cover} alt="" />
            </div>

            <div className="info">
              <div className="container">
                <h3 className="title">{item.info.title}</h3>
                <div className="brief">{item.info.brief}</div>
                <div className="caption">
                  {item.info.authors != undefined ? (
                    <span className="author-0">
                      {item.info.authors[0].data.info.title}{` · `}
                    </span>
                  ) : (
                    ""
                  )}

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

export default Gallery_MediumCards;
