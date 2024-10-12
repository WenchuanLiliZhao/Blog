import React from "react";

interface DateFormatterProps {
  date: number[];
  language: "zh" | "en";
}

const DateFormatter: React.FC<DateFormatterProps> = ({ date, language }) => {
  const [year, month, day] = date;

  const formatDate = () => {
    const dateObj = new Date(year, month - 1, day); // 创建 Date 对象，月份从 0 开始
    if (language === "zh") {
      return `${year}年${month}月${day}日`;
    } else if (language === "en") {
      const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
      return dateObj.toLocaleDateString("en-GB", options);
    }
  };

  return <>{formatDate()}</>;
};

export default DateFormatter;
