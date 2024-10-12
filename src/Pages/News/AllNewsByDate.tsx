import AllNews from './AllNews';
import Template_News from '../_Templates/Template_News';

const sortNewsByDate = (newsObject: { [key: string]: Template_News }): Template_News[] => {
  // 将对象转为数组
  const newsArray = Object.values(newsObject);
  
  // 按照日期排序，最新的在最前面
  return newsArray.sort((a, b) => {
    const [aYear, aMonth, aDay] = a.info.date;
    const [bYear, bMonth, bDay] = b.info.date;
    // 创建日期对象，以便排序
    const aDate = new Date(aYear, aMonth - 1, aDay);
    const bDate = new Date(bYear, bMonth - 1, bDay);
    
    return bDate.getTime() - aDate.getTime();
  });
};

// 使用该函数来获取排序后的新闻数组
const AllNewsByDate = sortNewsByDate(AllNews);

export default AllNewsByDate
