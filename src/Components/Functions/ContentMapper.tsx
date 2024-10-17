import React from "react";

// 假设你已经有的 MD 组件
import Markdown from "./Markdown";

// 定义内容数组的类型
type ContentItem = string | JSX.Element;

interface ContentMapperProps {
  content: ContentItem[];
}

const ContentMapper: React.FC<ContentMapperProps> = ({ content }) => {
  return (
    <>
      {content.map((item, index) => {
        if (typeof item === "string") {
          // 对于字符串，使用 MD 组件
          return <Markdown key={index}>{item}</Markdown>;
        } else {
          // 假设对象是 XML 代表的 JSX.Element，直接渲染
          return <React.Fragment key={index}>{item}</React.Fragment>;
        }
      })}
    </>
  );
};

export default ContentMapper;
