import { Helmet } from "react-helmet-async";
import Template_Page from "../../Pages/_Templates/Template_Page";
import React from "react";
import SiteInfo from "../../SiteInfo";
import Template_Author from "../../Pages/_Templates/Template_Author";

interface Props {
  data: Template_Page;
}

const LiliHelmet: React.FC<Props> = ({ data }) => {
  return (
    <Helmet>
      {/* Example meta tags; customize these as needed */}
      <title>
        {SiteInfo.title} :: {data.info.title}
      </title>

      <meta name="description" content={data.info.brief} />

      {data.info.tags != undefined ? (
        <meta name="keywords" content={data.info.tags.join(", ")} />
      ) : (
        ""
      )}

      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": ${data.info.type != "" ? data.info.type : "WebSite"},
          "name": "${SiteInfo.title}",
          "url": "${SiteInfo.url}",

          "author": "${data.info.authors.map((item: Template_Author) => 
            item.data.info.title
          )}", ${" "}

          "image": "${data.info.cover}",

          "abstract": "${data.info.brief}",
        }`}
      </script>

      {/* <style>{`
        :root {
          --color-sig--main: black;
          --color-sig--sec: black;
        }
      `}</style> */}
    </Helmet>
  );
};

export default LiliHelmet;
