import { useEffect, useState } from "react";

const JsonTojs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(
  //     "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0cedfeac-868b-4741-9934-4e3b3e969481/elements.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T063006Z&X-Amz-Expires=86400&X-Amz-Signature=26dfef80f3f0deab2e6ce494c28a680a161ba4e529039974086f12b42d066f69&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22elements.json%22&x-id=GetObject"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return { data };
};

export default JsonTojs;
