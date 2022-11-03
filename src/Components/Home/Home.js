import React from "react";
import JsonTojs from "../../Utilities/JsonTojs";
import { strTostyle } from "./../../Utilities/styleGenerator";
import { Helmet } from "react-helmet";
import { dynamic } from "./../../Utilities/dynamic";
import DynamicElement from "./DynamicElement";

const Home = () => {
  const data = JsonTojs().data;
  //  console.log(strTostyle(data));

  const { styles, classes, tags } = strTostyle(data);
  const dynamicObj = dynamic(data, classes, tags);

  return (
    <div>
      <Helmet>
        <style>{styles}</style>
      </Helmet>
      {dynamicObj.map((dObj) => (
        <DynamicElement key={dObj.id} properties={dObj} />
      ))}
    </div>
  );
};

export default Home;
