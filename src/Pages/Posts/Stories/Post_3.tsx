import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Suep from "../../Authors/Author_Suep";

const Post_3: Template_Page = {
  info: {
    title: "「中華文化有意思」從何而來？",
    key: "post_3",
    cover:
      "https://i.pinimg.com/1200x/32/f5/ad/32f5ad100f4298e08fd54aa09c6e049a.jpg",
    latest_update: [2024, 9, 3],
    brief:
      "中華文化是多樣且複雜的。我們強調摒棄刻板印象，以更全面的眼光理解這一文化的重要性。中華文化並非單一的道統，而是一個包羅萬象、充滿各式觀點的龐大體系，涉及詩歌、音樂、藝術、哲學等多個領域。了解中華文化的最佳途徑是透過閱讀、觀賞、聆聽和旅行，以遊玩的心態探索其中的趣味。我們通過多元的學習方式，如電子書、角色扮演及非遺手工等，鼓勵年輕人感受中華文化的魅力。總之，真正欣賞中華文化需要深入探索與反思，並在其中尋找自我表達的方式。",
    authors: [
      {
        data: Author_Suep,
      },
    ],
  },
  content: (
    <>
      <Sec size="large">
        <Fig
          art={
            <img
              src="https://i.pinimg.com/1200x/32/f5/ad/32f5ad100f4298e08fd54aa09c6e049a.jpg"
              alt=""
            />
          }
          caption={
            <p>
              Photo by The{" "}
              <a href="https://unsplash.com/@clevelandart?utm_content=creditCopyText&amp;utm_medium=referral&amp;utm_source=unsplash">
                Cleveland Museum of Art
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/photos/a-painting-of-a-river-with-trees-and-mountains-in-the-background-xvMkkWTUPv8?utm_content=creditCopyText&amp;utm_medium=referral&amp;utm_source=unsplash">
                Unsplash
              </a>
            </p>
          }
        />
      </Sec>
    </>
  ),
};

export default Post_3;
