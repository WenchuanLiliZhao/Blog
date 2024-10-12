import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import Template_Page from '../../Pages/_Templates/Template_Page';

interface Props {
  pages: { [key: string]: Template_Page };
}

const PageList: React.FC<Props> = ({ pages }) => {
  // 先将对象转换为数组以便进行过滤
  const pageArray = Object.values(pages);

  const [searchResults, setSearchResults] = useState<Template_Page[]>(pageArray);

  const handleSearch = (query: string) => {
    const results = pageArray.filter(page => {
      // 检查页面的title, key, brief, label字段
      const pageMatches = [page.info.title, page.info.key, page.info.brief, page.info.label]
        .filter(Boolean)
        .some(field => field!.toLowerCase().includes(query.toLowerCase()));

      // 检查页面的tags
      const tagsMatch = page.info.tags?.some(tag => {
        return [tag.info.title, tag.info.key, tag.info.brief]
          .filter(Boolean)
          .some(field => field!.toLowerCase().includes(query.toLowerCase()));
      }) || false;

      // 检查页面的authors
      const authorsMatch = page.info.authors?.some(author => {
        return [author.data.info.title, author.data.info.key, author.data.info.brief]
          .filter(Boolean)
          .some(field => field!.toLowerCase().includes(query.toLowerCase()));
      }) || false;

      return pageMatches || tagsMatch || authorsMatch;
    });
    setSearchResults(results);
  };

  useEffect(() => {
    setSearchResults(pageArray); // 初始化将所有页面作为搜索结果
  }, [pages]);

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <ul>
        {searchResults.map(page => (
          <li key={page.info.key}>{page.info.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
