import React from "react"
import "./Fig.scss"

interface Props {
  art: JSX.Element
  caption?: JSX.Element | string
  size?: "small"
}

const Fig: React.FC<Props> = ({ art, caption, size }) => {
  return (
    <figure className={`fig ${size}`}>
      <div className="art">
        {art}
      </div>
      
      {caption != undefined ?
        <figcaption>
          {caption}
        </figcaption>
        :
        ""
      }
    </figure>
  )
}

export default Fig