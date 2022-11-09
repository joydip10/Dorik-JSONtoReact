import JsonTojs from "../../Utilities/JsonTojs";
import { strTostyle } from "./../../Utilities/styleGenerator";
import { Helmet } from "react-helmet";
import { dynamic } from "./../../Utilities/dynamic";
import Dynamic from "./Dynamic";

const Home = () => {
  const data = JsonTojs().data;
  const { styles, classes, tags } = strTostyle(data);
  const dynamicObj = dynamic(data, classes, tags);

  return (
    <div>
      <Helmet>
        <style>{styles}</style>
      </Helmet>

      {dynamicObj.map((item) => (
        <Dynamic key={item?.className} props={item} />
      ))}
    </div>
  );
};

export default Home;
