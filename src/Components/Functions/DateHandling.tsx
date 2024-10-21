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

  return formatDate();
};


// 获取当前日期并生成数组
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // JavaScript month is 0-based, so + 1 for human-readable month
const day = today.getDate();

const Today: [number, number, number] = [year, month, day];


function IsLaterDate(date1: number[], date2: number[]): boolean {
  if (date1[0] !== date2[0]) return date1[0] > date2[0]; // Compare year
  if (date1[1] !== date2[1]) return date1[1] > date2[1]; // Compare month
  return date1[2] > date2[2]; // Compare day
}


export { IsLaterDate, DateFormatter, Today }