import "./_Template_PageBody.scss"

import Divider_LatestUpdate from "../../Components/Divider/LatestUpdate";
import Footer from "../../Components/Navigation/Footer";
import TopNav from "../../Components/Navigation/TopNav";
import SiteInfo from "../../SiteInfo";
import React from "react";
// import FixBtnsOnPage from "../../Components/BtnsAndBtnGroups/Group/FixedBubbleOnPage";

interface Props {
  children: JSX.Element,
}

const PageBody: React.FC<Props> = ({ children }) => {
  return (<>
    <div className={`page-body`}>
      <div className="page-body-container">
        <Divider_LatestUpdate className="divider-latest-update-top" date={SiteInfo.latest_update} language="en"/>
        <TopNav />
        <main className={`page-body-main`}>
          {children}
        </main>
        <Footer />
      </div>

      {/* <FixBtnsOnPage /> */}
    </div>
  </>)
}

export default PageBody