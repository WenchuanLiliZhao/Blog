import "./Tag.scss"
import Template_Page from "../../Pages/_Templates/Template_Page";

interface Props {
  data: Template_Page;
  size: 12 | 14 | 16;
}

const Tag: React.FC<Props> = ({ data, size }) => {
  return (
    <span
      className="inline-tag"
      style={{
        fontSize: `${size}px`,
      }}
    >
      {data.info.title}
    </span>
  )
}

export default Tag