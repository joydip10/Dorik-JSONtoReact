import parse from "html-react-parser";
import React from "react";

const DynamicElement = ({ properties }) => {
  if (properties.type === "text") {
    const tag = properties.tag;
    const className = properties.className;
    const child = parse(properties.content);
    return React.createElement(tag, { className: className }, child);
  }
  if (properties.type === "img") {
    const tag = properties.tag;
    const className = properties.className;
    const src = properties.src;
    const alt = properties.alt;
    return React.createElement(tag, {
      className: className,
      src: src,
      alt: alt,
    });
  }
  if (properties.type === "form") {
    const tag = properties.tag;
    const className = properties.className;
    const items = properties.itemComponents;
    const button = properties.buttonComponent;
    const inputChilds = items.map((item) =>
      React.createElement(item.tag, {
        className: item.className,
        placeholder: item.placeholder,
      })
    );
    const buttonChild = React.createElement(
      button.tag,
      { className: button.className },
      button.content
    );

    return React.createElement(
      tag,
      { className: className },
      ...inputChilds,
      buttonChild
    );
  }
};

export default DynamicElement;
