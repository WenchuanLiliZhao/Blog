
import Book_Other from "./Others/_Book_Other";
import Book_Tests from "./Test/_Book_Test";

const Posts = {
  ...Book_Tests,
  ...Book_Other,
};

export default Posts;
