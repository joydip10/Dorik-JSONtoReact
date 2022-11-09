import React from "react";

const Input = (props) => {
  const { label, type, className, placeholder } = props?.properties;

  return (
    <>
      <label>{label}</label>
      <input
        type={type.toLocaleLowerCase()}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
