import "./LatestUpDate.scss";

import React from "react";
import DateFormatter from "../Functions/DateFormatter";

interface Props {
  date: number[],
  language: "zh" | "en",
  className?: string,
}

const Divider_LatestUpdate: React.FC<Props> = ({ date, language, className }) => {
  return (
    <>
      <div className={`divider-latest-update ${className}`}>
        <div className="divider-latest-update-left">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="divider-latest-update-mid">
          <div className="divider-latest-update-text">
            Latest Update: <DateFormatter date={date} language={language} />
          </div>
        </div>
        <div className="divider-latest-update-right">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default Divider_LatestUpdate;
