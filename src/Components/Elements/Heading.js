import React from "react";
import parse from "html-react-parser";
const Heading = (props) => {
  const { tag, className, content } = props?.properties;

  const template = `<${tag} className="${className}">${content}</${tag}>`;

  return <>{parse(template)}</>;
};

export default Heading;
