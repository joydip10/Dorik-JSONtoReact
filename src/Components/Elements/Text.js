import React from "react";
import parse from "html-react-parser";

const Text = (props) => {
  const { content, className } = props?.properties;
  const sth = content.replace("<p>", "").replace("</p>", "");
  return (
    <>
      <p className={className}>{sth}</p>
    </>
  );
};

export default Text;
