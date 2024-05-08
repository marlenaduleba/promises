const multiline = require("../multiline");

describe("multiline function", () => {
  test("correctly numbers non-empty lines in the template string", () => {
    const input = multiline`
    function add(a, b) {
    return a + b;
    }
    `;
    const expectedOutput = `1 function add(a, b) {\n2 return a + b;\n3 }\n`;
    expect(input).toBe(expectedOutput);
  });

  test("ignores empty lines and does not number them", () => {
    const input = multiline`

    function test() {
    return true;
    
    }
    `;
    const expectedOutput = `1 function test() {\n2 return true;\n3 }\n`;
    expect(input).toBe(expectedOutput);
  });

  test("preserves original indentation for a multiline function with indentation", () => {
    const input = multiline`
    function add(a, b) {
       return a + b;
    }
    `;
    const expectedOutput = `1 function add(a, b) {\n2    return a + b;\n3 }\n`;
    expect(input).toBe(expectedOutput);
  });

  test("handles a single line of code", () => {
    const input = multiline`console.log("Hello World");`;
    const expectedOutput = `1 console.log("Hello World");\n`;
    expect(input).toBe(expectedOutput);
  });

  test("returns empty string when provided with an empty template", () => {
    const input = multiline``;
    const expectedOutput = ``;
    expect(input).toBe(expectedOutput);
  });
});
