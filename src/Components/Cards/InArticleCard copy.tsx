import "./InArticleCard.scss";

import DateFormatter from "../Functions/DateFormatter";

interface Props {
  title: string;
  link: string;
  cover: string;
  brief: string;
  author: string;
  date: [number, number, number];
}

const InArticleNewsClip: React.FC<Props> = ({
  title,
  link,
  cover,
  brief,
  author,
  date,
}) => {
  return (
    <>
      <a href={`${link}`} className="in-article-card" target="_blank">
        <div className="cover">
          <img src={cover} alt="" />
        </div>
        <div className="info">
          <div className="container">
            <div className="title">{title}</div>
            <div className="brief">{brief}</div>
            <div className="caption">
              <span className="author-0">
                {author}
                {` · `}
              </span>
              <span>
                <DateFormatter date={date} language={"zh"} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default InArticleNewsClip;
