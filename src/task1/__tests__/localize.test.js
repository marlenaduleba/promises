const { localize, translations } = require("../localize"); // Załóżmy, że Twoja funkcja jest zdefiniowana w pliku localize.js

describe("localize function", () => {
  test("correctly localizes English greeting", () => {
    const templateGreating = `en greet`;
    expect(localize(templateGreating, translations)).toBe("Hello");
  });

  test("correctly localizes English introduction", () => {
    const templateIntroduction = `en intro`;
    expect(localize(templateIntroduction, translations)).toBe(
      "Welcome to our website"
    );
  });

  test("correctly localizes French greeting", () => {
    const templateGreating = `fr greet`;
    expect(localize(templateGreating, translations)).toBe("Bonjour");
  });

  test("correctly localizes French introduction", () => {
    const templateIntroduction = `fr intro`;
    expect(localize(templateIntroduction, translations)).toBe(
      "Bienvenue sur notre site web"
    );
  });
});
