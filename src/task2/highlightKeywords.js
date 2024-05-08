function highlightKeywords(templateString, arr) {
  let templateLiteral = "";
  const strings = templateString.split(/\${\d+}/);

  strings.forEach((str, i) => {
    templateLiteral +=
      i in arr ? `${str}<span class='highlight'>${arr[i]}</span>` : `${str}`;
  });

  return templateLiteral;
}

const keywords = ["JavaScript", "template", "tagged"];
const template =
  "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

module.exports = { highlightKeywords, keywords, template };
