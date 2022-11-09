import React from "react";
import loadable from "@loadable/component";

const AsyncPage = loadable((props) => import(`./${props.page}`), {
  cacheKey: (props) => props.page,
});

const Form = (props) => {
  const { className, itemComponents, buttonComponent } = props?.properties;

  return (
    <form className={className}>
      {itemComponents.map((component) => (
        <AsyncPage
          key={component?.id}
          page={component?.type}
          properties={component}
        />
      ))}
      {
        <AsyncPage
          key={buttonComponent?.id}
          page={buttonComponent?.type}
          properties={buttonComponent}
        />
      }
    </form>
  );
};

export default Form;
