import Sec from "../../_Templates/Layouts/InArticle/_ArticleSection";
import Template_Page from "../../_Templates/Template_Page";

const Post_Privacy: Template_Page = {
  info: {
    title: "Privacy",
    key: "privacy",
    brief: "",
    latest_update: [2024, 9, 1],
    cover: "",
  },
  content: (
    <>
      <Sec>
        <p>
          At &quot;Charming Chinese Culture&quot; (中華文化有意思), we value
          your privacy. This Privacy Policy outlines the types of information we
          collect through our website and how we use, disclose, and protect that
          information.
        </p>
        <h3 id="information-collection">Information Collection</h3>
        <ol>
          <li>
            <strong>Personal Information:</strong> We do not collect personal
            information unless you volunteer it (e.g., through contact forms).
          </li>
          <li>
            <strong>Non-Personal Information:</strong> We may collect
            non-personal information such as browser type, operating system, and
            usage statistics to improve user experience.
          </li>
        </ol>
        <h3 id="use-of-information">Use of Information</h3>
        <ul>
          <li>
            Personal information provided by you is used solely to respond to
            your inquiries or provide the services you request.
          </li>
          <li>
            Non-personal information is used to enhance website functionality
            and content.
          </li>
        </ul>
        <h3 id="disclosure-of-information">Disclosure of Information</h3>
        <ul>
          <li>
            We do not sell, trade, or otherwise transfer to outside parties your
            personal information.
          </li>
          <li>
            We may release information when necessary to comply with the law or
            protect our or others&#39; rights, property, or safety.
          </li>
        </ul>
        <h3 id="cookies">Cookies</h3>
        <p>
          We may use cookies to enhance user experience. You can choose to
          disable cookies through your browser settings.
        </p>
        <h3 id="security">Security</h3>
        <p>
          We implement appropriate security measures to protect your
          information. However, no data transmission over the internet can be
          guaranteed to be entirely secure.
        </p>
        <h3 id="contact-us">Contact Us</h3>
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us at info@suep.com.
        </p>
      </Sec>
    </>
  ),
};

export default Post_Privacy;
