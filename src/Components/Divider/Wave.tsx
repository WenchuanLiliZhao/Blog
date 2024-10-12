import "./Wave.scss"
import BgImage from "../../../public/Wave.png"

export default function Divider_Wave() {
  return (<>
    {/* <div className="divider_wave" style={{backgroundImage: `url(${BgImage})`}}></div> */}

    <div className="divider_line" style={{backgroundImage: `url(${BgImage})`}}></div>
  </>)
}