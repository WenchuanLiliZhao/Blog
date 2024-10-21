// _Books.tsx

import Template_Page from "../../_Templates/Template_Page";
import Template_Book from "../../_Templates/Template_Book";
import Book_Calculus from "./Lorem Ipsum/_Cover";
import { IsLaterDate } from "../../../Components/Functions/DateHandling";

const Books = {
  Book_Calculus,
  // more books
};

// Update coverPage.info.latest_update
Object.values(Books).forEach((book: Template_Book) => {
  let latestUpdate = book.coverPage.info.latest_update;

  Object.values(book.toc).forEach((chapterPages) => {
    chapterPages.forEach(page => {
      if (IsLaterDate(page.info.latest_update, latestUpdate)) {
        latestUpdate = page.info.latest_update;
      }
    });
  });
  
  // Modify the coverPage's latest_update with the latest date
  book.coverPage.info.latest_update = latestUpdate;
});

// 构建 AllPagesInBooks
const AllPagesInBooks: Template_Page[] = [];

// 遍历每本书
Object.values(Books).forEach((book: Template_Book) => {
  // 添加 coverPage
  AllPagesInBooks.push(book.coverPage);

  // 遍历 toc 中的每个章节
  Object.values(book.toc).forEach((chapterPages) => {
    chapterPages.forEach(page => {
      AllPagesInBooks.push({
        ...page,
        info: {
          ...page.info,
          inBook: book,
        },
      });
    });
  });
});

export { Books, AllPagesInBooks };
