import React from "react";

const Image = (props) => {
  const { className, src, alt } = props.properties;
  console.log(props.properties);
  // console.log(src, className, alt);
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
