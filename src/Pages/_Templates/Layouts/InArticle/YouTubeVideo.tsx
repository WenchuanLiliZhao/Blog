import "./YouTubeVideo.scss"

interface Props {
  v: string;
  ratio?: [number, number];
}

const YouTubeVideo: React.FC<Props> = ({ v, ratio }) => {

  const passRatio = ratio != undefined ? ratio : [16, 9]

  const ratioPersantage = `${String((passRatio[1] / passRatio[0]) * 100 )}%`

  return (
    <>
      <figure className="youtube-video"
        style={{
          paddingTop: ratioPersantage
        }}
      >
        <iframe
          className="youtube-video-frame"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${v}`}
          title="MR互動體驗·趣學廿四節氣之夏至"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </figure>
    </>
  );
};

export default YouTubeVideo;
