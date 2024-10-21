import { IsLaterDate } from "../../../Components/Functions/DateHandling";
import Template_Author from "../../_Templates/Template_Author";
import Template_Page from "../../_Templates/Template_Page";
import TestBook from "./TestBook";

const Books = {
  TestBook,
};

const BookPages = {
  ...TestBook.toc,
}

// Helper function to compare two dates in [year, month, day] format
Object.values(Books).forEach((book) => {
  let latestUpdate = [0, 0, 0]; // Initial date to compare
  const authorsMap = new Map<string, Template_Author>();
  
  // Iterate over each page to find the latest update
  Object.values(book.toc).forEach((page: Template_Page) => {
    if (IsLaterDate(page.info.latest_update, [0, 0, 0])) {
      latestUpdate = page.info.latest_update;
    }

    page.info.authors.forEach((author: Template_Author) => {
      // Assuming `data.title` is a unique identifier for each author
      const authorIdentifier = author.data.info.title;
      if (!authorsMap.has(authorIdentifier)) {
        authorsMap.set(authorIdentifier, author);
      }
    });
  });

  book.coverPage.info.latest_update = latestUpdate; // Update the book's latest update
  
  book.coverPage.info.authors = Array.from(authorsMap.values());
});

Object.values(Books).forEach((book) => {
  Object.values(book.toc).forEach((page) => {
    page.info.inbook = book
  });
});

export { Books, BookPages };
