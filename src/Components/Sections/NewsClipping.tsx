import Channels from "../../Pages/Channels/_Channels";
import AllNewsByDate from "../../Pages/News/AllNewsByDate";
import NewsClip from "../Cards/NewsClip";
import Divider_Wave from "../Divider/Wave";
import "./NewsClipping.scss";

interface Props {
  className?: string,
}

const Section_NewsClipping: React.FC<Props> = ({className}) => {
  return (
    <>
      <section className={`news-clipping ${className}`}>
        <div className="container">
          <div className="row">
            <NewsClip data={AllNewsByDate[0]} />
            <NewsClip data={AllNewsByDate[1]} />
          </div>
          <div className="row">
            <NewsClip data={AllNewsByDate[2]} />
            <NewsClip data={AllNewsByDate[3]} />
          </div>
          <div className="row">
            <NewsClip data={AllNewsByDate[4]} />
            <NewsClip data={AllNewsByDate[5]} />
          </div>
          <div className="row">
            <a className="image-card" href={`/${Channels.Channel_News.info.key}`}>
              <img src="https://i.pinimg.com/564x/86/f2/12/86f2127100e1a57e6e13ddcc2ab71600.jpg" alt="" />
            </a>
          </div>
        </div>

        <a className="read-more" href={`/${Channels.Channel_News.info.key}`}>更多新聞...</a>

        <Divider_Wave />
      </section>
    </>
  );
}

export default Section_NewsClipping
