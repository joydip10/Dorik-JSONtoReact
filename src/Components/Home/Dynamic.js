import React from "react";
import loadable from "@loadable/component";

const AsyncPage = loadable((props) => import(`../Elements/${props.page}`), {
  cacheKey: (props) => props.page,
});

const Dynamic = ({ props }) => {
  const { type } = props;
  return <AsyncPage page={type} properties={props} />;
};

export default Dynamic;
