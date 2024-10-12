import "./GridGallery.scss";
import React from "react";

interface Art {
  src: string;
  caption?: JSX.Element | string;
}

interface Arts {
  columns: 2 | 3 | 4;
  ratio: [number, number];
  arts: Art[];
}

const GridGallery: React.FC<Arts> = ({ ratio, columns, arts }) => {
  return (
    <div
      className={`lili-grid-gallery columns-${String(columns)} ${String(
        ratio[0]
      )}`}
    >
      {arts.map((item: Art, i: number) => (
        <div className="art" key={`${item}${i}`}>
          <div
            className="img-container"
            style={{
              paddingTop: `${String((ratio[1] / ratio[0]) * 100)}%`,
            }}
          >
            <img src={item.src} alt="" />
          </div>
          {item.caption != undefined ? (
            <>
              <figcaption className="caption">{item.caption}</figcaption>
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
