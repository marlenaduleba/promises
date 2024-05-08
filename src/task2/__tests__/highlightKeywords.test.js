const {
  highlightKeywords,
  keywords,
  template,
} = require("../highlightKeywords");

describe("highlightKeywords function", () => {
  test("correctly highlights keywords in the template string", () => {
    const expectedOutput =
      "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation.";
    expect(highlightKeywords(template, keywords)).toBe(expectedOutput);
  });

  test("returns original string if no keywords are provided", () => {
    const noKeywords = [];
    const expectedOutput =
      "Learn  tagged templates to create custom  literals for  manipulation.";
    expect(highlightKeywords(template, noKeywords)).toBe(expectedOutput);
  });

  test("handles templates with missing keywords correctly", () => {
    const incompleteKeywords = ["JavaScript", "template"];
    const expectedOutput =
      "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for  manipulation.";
    expect(highlightKeywords(template, incompleteKeywords)).toBe(
      expectedOutput
    );
  });
});
