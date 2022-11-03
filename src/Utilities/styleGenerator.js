function getStyles(strLiteral, styleObj) {
  let stylestuffs = [];
  let styleliteral = (key, value) => `${key}:"${value}";`;

  for (let j in styleObj) {
    stylestuffs.push(
      styleliteral(
        j.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        styleObj[j]
      )
    );
  }

  stylestuffs = stylestuffs.join(" ");

  stylestuffs = `.${strLiteral}{${stylestuffs}}`;

  return stylestuffs;
}

export const strTostyle = function (data) {
  let totalStyles = [];
  let totalClasses = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i].name !== "Subscription Form") {
      //Getting classname
      const rand = (" " + Math.random() * 1000).split(".")[0];

      let strLiteral;
      let name = data[i].name;
      if (data[i]?.level) {
        let level = data[i].level;
        strLiteral = `${name}${rand}${level}`.replaceAll(" ", "");
      } else {
        strLiteral = `${name}${rand}`.replaceAll(" ", "");
      }

      totalClasses[i] = strLiteral;

      //Getting styles
      let stylestuffs = [];
      let styleliteral = (key, value) => `${key}:"${value}";`;

      for (let j in data[i].style) {
        stylestuffs.push(
          styleliteral(
            j.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            data[i].style[j]
          )
        );
      }

      //console.log(stylestuffs.join(" ").replaceAll("\\", ""));

      stylestuffs = stylestuffs.join(" ");

      stylestuffs = `.${strLiteral}{${stylestuffs}}`;
      totalStyles.push(stylestuffs.replaceAll('"', "'"));
    }
  }

  let totalFormClasses = {};
  let totalFormStyles = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i]?.name.toLowerCase().includes("form")) {
      const formstyle = data[i].form.style;
      const itemstyle = data[i].form.fields.style;
      const subbtnstyle = data[i].form.submitButton.style;

      const formliteral = `Form${("" + Math.random() * 1000).split(".")[0]}`;
      const itemliteral = `Item${("" + Math.random() * 1000).split(".")[0]}`;
      const subbtnliteral = `Btn${("" + Math.random() * 1000).split(".")[0]}`;

      totalFormClasses[i] = [formliteral, itemliteral, subbtnliteral];

      totalFormStyles.push(
        getStyles(formliteral, formstyle).replaceAll('"', "'")
      );
      totalFormStyles.push(
        getStyles(itemliteral, itemstyle).replaceAll('"', "'")
      );
      totalFormStyles.push(
        getStyles(subbtnliteral, subbtnstyle).replaceAll('"', "'")
      );
    }
  }

  const tags = {};

  for (let i = 0; i < data.length; i++) {
    if (!data[i]?.name.toLowerCase()?.includes("form")) {
      if (data[i].type === "heading") {
        tags[i] = data[i].level;
      }
      if (data[i].type === "text") {
        tags[i] = "p";
      }
      if (data[i].type === "image") {
        tags[i] = "img";
      }
    }
    if (data[i]?.name.toLowerCase()?.includes("form")) {
      tags[i] = "form";
    }
  }

  const styles = (totalStyles + "\n" + totalFormStyles)
    .replaceAll(",", "\n")
    .replaceAll("'", "");
  const classes = { ...totalClasses, ...totalFormClasses };

  return { styles, classes, tags };
};
