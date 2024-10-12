import React from "react";
import Template_Page from "../Template_Page";
import PageBody from "../_Template_PageBody";
import ChannelPageHeader from "../../../Components/Sections/ChannelPageHeader";

interface Props {
  data: Template_Page;
}

const ChannelLayout: React.FC<Props> = ({ data }) => {
  return (
    <>
      <PageBody>
        <>
          {data.info.front != null ? data.info.front : (<></>)}
          <ChannelPageHeader page={data} />
          {data.content}
        </>
      </PageBody>
    </>
  );
};

export default ChannelLayout;
