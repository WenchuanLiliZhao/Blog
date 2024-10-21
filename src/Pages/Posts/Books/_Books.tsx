import Template_Page from "../../_Templates/Template_Page";
import Book_Calculus from "./Calculus/_Cover";

const Books = {
  Book_Calculus,
};

// 构建 AllPagesInBooks
const AllPagesInBooks: Template_Page[] = [];

// 遍历每本书
Object.values(Books).forEach((book) => {
  // 添加 coverPage
  AllPagesInBooks.push(book.coverPage);

  // 遍历 toc 中的每个章节
  Object.values(book.toc).forEach((chapterPages) => {
    // 为每个 page 添加 test: 'a'
    chapterPages.forEach(page => {
      AllPagesInBooks.push({
        ...page,
        inBook: book,
      });
    });
  });
});

export { Books, AllPagesInBooks };
