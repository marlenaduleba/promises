function localize(templateString, obj) {
  const keys = templateString.split(" ");

  return obj[keys[0]][keys[1]];
}

const translations = {
  en: {
    greet: "Hello",
    intro: "Welcome to our website",
  },
  fr: {
    greet: "Bonjour",
    intro: "Bienvenue sur notre site web",
  },
};

const language = "en"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const templateGreating = `${language} ${greeting}`;

const templateIntroduction = `${language} ${introduction}`;

console.log(localize(templateGreating, translations));
console.log(localize(templateIntroduction, translations));

module.exports = { localize, translations };
