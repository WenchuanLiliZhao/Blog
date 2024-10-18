import { Helmet } from "react-helmet-async";
import Template_Page from "../../Pages/_Templates/Template_Page";
import React from "react";
import SiteInfo from "../../SiteInfo";

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

      {data.info.keywords != undefined ? (
        <meta name="keywords" content={data.info.keywords.join(", ")} />
      ) : (
        ""
      )}

      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "${SiteInfo.title}",
          "url": "${SiteInfo.url}",

          "author": ${data.info.authors != undefined ? `"${data.info.authors[0].data.info.title}",` : `"${SiteInfo.author.info.title}",`}

          ${data.info.cover != undefined ? `"image": "${data.info.cover}",` : null}

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
