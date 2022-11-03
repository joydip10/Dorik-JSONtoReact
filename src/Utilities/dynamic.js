export const dynamic = (data, classes, tags) => {
  const centralProps = [];

  for (let i in tags) {
    if (tags[i] !== "form") {
      const selectedClass = classes[i];
      const selectedTag = tags[i];
      if (data[i].type === "heading" || data[i].type === "text") {
        const props = {
          type: "text",
          tag: selectedTag,
          className: selectedClass,
          content: data[i].content,
        };
        centralProps.push(props);
      }
      if (data[i].type === "image") {
        const props = {
          type: "img",
          tag: selectedTag,
          className: selectedClass,
          src: data[i].attr.src,
          alt: data[i].attr.alt,
        };
        centralProps.push(props);
      }
    } else {
      //Form properties
      const selectedClass = classes[i][0];
      const selectedTag = tags[i];

      //Item properties
      const items = data[i].form.fields.items;
      const itemComponents = items.map((item) => {
        return {
          id: item?.id,
          placeholder: item?.attr?.placeholder,
          className: classes[i][1],
          tag: "input",
        };
      });

      //Button properties
      const button = data[i].form.submitButton;
      const buttonComponent = {
        content: button.content,
        className: classes[i][2],
        tag: "button",
      };

      const props = {
        type: "form",
        tag: selectedTag,
        className: selectedClass,
        itemComponents,
        buttonComponent,
      };
      centralProps.push(props);
    }
  }
  return centralProps;
};

export default dynamic;
