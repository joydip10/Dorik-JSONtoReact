import React from "react";

const Button = (props) => {
  const { className, content } = props?.properties;
  return (
    <button type="submit" className={className}>
      {content}
    </button>
  );
};

export default Button;
