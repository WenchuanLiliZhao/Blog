import React from "react";
import Template_Page from "../Template_Page";
import PageBody from "../_Template_PageBody";
import ChannelPageHeader from "../../../Components/Sections/ChannelPageHeader";
import { Helmet } from "react-helmet-async";
import SiteInfo from "../../../SiteInfo";

interface Props {
  data: Template_Page;
}

const ChannelLayout: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Helmet>
        {/* Example meta tags; customize these as needed */}
        <title>{SiteInfo.title} :: {data.info.title}</title>
        <meta name="description" content={data.info.brief} />
      </Helmet>
      <PageBody>
        <>
          {data.info.front != null ? data.info.front : <></>}
          <ChannelPageHeader page={data} />
          {data.content}
        </>
      </PageBody>
    </>
  );
};

export default ChannelLayout;
