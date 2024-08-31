import React from "react";
import "../styles/layout/WebsiteMain.css";

interface MyComponentsProps {
  children?: React.ReactNode;
  dontIncluderHeader?: boolean;
}

const WebsiteMain = ({ children }: MyComponentsProps) => {
  return (
    <>
      {/* main layout start */}
      <div className="website-main-layout-box-v-two"></div>
      {/* main layout start */}
    </>
  );
};

export default WebsiteMain;
