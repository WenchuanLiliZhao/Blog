import "./NewsClip.scss"

import Template_News from "../../Pages/_Templates/Template_News"
import DateFormatter from "../Functions/DateFormatter"

interface Props {
  data: Template_News
}

const NewsClip: React.FC<Props> = ({ data }) => {
  return (<>
    <a className="news-clip" href={data.info.key} target="_blank">
      <div className="title">{data.info.title}</div>
      {/* <div className="brief">{data.info.brief}</div> */}
      <div className="info">
        <span className="publication">{data.info.publication} · </span>
        <span><DateFormatter date={data.info.date} language={"zh"}/></span>
      </div>
    </a>
  </>)
}

export default NewsClip