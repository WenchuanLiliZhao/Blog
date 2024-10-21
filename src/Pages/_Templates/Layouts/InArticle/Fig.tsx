import React from "react";
import "./Fig.scss";
import MDBlock from "../../../../Components/Functions/Markdown";

interface Props {
  src: string;
  title: string;
  caption: string;
  size?: "small";
}

const Fig: React.FC<Props> = ({ src, caption, size, title }) => {
  return (
    <figure className={`fig ${size}`}>
      <img src={src} alt={title} />

      {caption != undefined ? (
        <figcaption>
          
          <MDBlock children={`sss ${caption}`} />
        </figcaption>
      ) : ""}
    </figure>
  );
};

export default Fig;
