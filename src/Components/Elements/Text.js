import React from "react";
import parse from "html-react-parser";

const Text = (props) => {
  const { content, className } = props?.properties;

  return (
    <>
      <p className={className}>{parse(content)}</p>
    </>
  );
};

export default Text;
