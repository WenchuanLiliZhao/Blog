import SiteInfo from "../../../SiteInfo";
import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Template_Page from "../../_Templates/Template_Page";



const Channel_About: Template_Page = {
  info: {
    title: "關於",
    key: "contact",
    title_display: <>關於「中華文化有意思」和我們</>,
    brief:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue metus, volutpat sed interdum quis, rutrum vel odio. Cras velit nisl, facilisis condimentum velit at, laoreet porttitor turpis. Integer luctus consequat sem vitae imperdiet.",
    label: `${SiteInfo.title}`,
    latest_update: SiteInfo.latest_update,
  },
  content: (
    <>
      <Sec>
        <h2 id="-">公司簡介</h2>

        <p>
          <strong>聯合電子出版有限公司</strong>
          立足香港、背靠內地、面向海外，從事數字化內容的生產和運營。我們依託聯合出版集團旗下三聯、中華、商務、萬里、新雅、中和等子公司資源優勢，兼收並蓄港台和內地優質華文內容，擁有最具規模、最多元化的電子書、有聲書庫，藉助數字平台之力和香港區位優勢，面向港澳乃至全球開展運營，為用戶提供華文數字閱讀資源及知識服務。旗下自營品牌包括「知書APP」、「知書閱聽圖書館」等。
        </p>
        <p>
          <strong>知書閱聽圖書館</strong>
          為港澳中小學提供一站式校園電子閱讀與學習服務。
        </p>
        <p>
          <strong>「多元閱讀，在香港閱聽全球」</strong>
          ——廣泛搜羅香港本地、內地、台灣以及海外優質閱讀資源，極大滿足本地學校、國際學校包括跨境學生在內的中小學生多元化的閱讀需要，擴寬香港學子在閱讀上的國際視野。
        </p>
        <p>
          <strong>「培養數字時代終身閱讀者」</strong>
          ——電子書、有聲書、課程，多元化的閱讀方式，閱讀筆記、作家進校園、校際閱讀比賽、讀後感、短片比賽，多種閱讀分享模式，帶來沉浸式閱讀體驗，讓閱讀成為學生的終身習慣，成為數字時代終身閱讀者。
        </p>
        <p>
          <strong>「教育，從閱讀開始」</strong>
          ——與學校協同探索圖書館課程構建及書香校園特色創建的有效途徑，提煉師生閱讀活動的校本化表達方式，搭建適合學校使用者的服務模型，打造多維立體的閱讀教育模式。
        </p>
        <h2 id="-">
          <strong>友情鏈接</strong>
        </h2>
        <p>聯合出版（集團）</p>
        <p>
          <a href="https://www.sup.com.hk/">https://www.sup.com.hk/</a>
        </p>
        <p>聯合電子出版有限公司</p>
        <p>
          <a href="http://suep.3201cn.com/we.html">
            http://suep.3201cn.com/we.html
          </a>
        </p>
        <p>知書閱聽圖書館</p>
        <p>
          <a href="https://www.nblib.com/">https://www.nblib.com/</a>
        </p>
        <p>知書APP</p>
        <p>
          <a href="https://www.nowbook.hk/#/">https://www.nowbook.hk/#/</a>
        </p>
        <p>3201Metaverse</p>
        <p>
          <a href="http://hk.3201cn.com/h5/#/">http://hk.3201cn.com/h5/#/</a>
        </p>
        <h2 id="-">聯繫我們</h2>
        <p>公司名稱：香港聯合電子出版有限公司</p>
        <p>公司地址：香港九龍長沙灣永康街77號環薈中心1011室</p>
        <p>主題展廳：香港九龍長沙灣永康街77號環薈中心1008室</p>
        <p>公司電話：（852）2597 8415</p>
        <p>業務拓展部：（852）9824 9587</p>
        <p>客戶服務部：（852）9673 7852</p>
        <p>電郵（一般查詢）：info@suep.com</p>
        <p>電郵（業務諮詢）：marketing@suep.com</p>
        <p>電郵（客戶服務）：cs@suep.com</p>
        <p>傳真：（852）2529 8388</p>
      </Sec>
    </>
  ),
};

export default Channel_About;
