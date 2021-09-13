module.exports = {
  translations: {
    siteName: () => 'Eleventy Starter',
    title: () => 'Localization and Internationalization Example',
    description: () => 'This page demonstrates how localization and internationalization works in this project setup.',
    docs: () => 'Docs',
    contact: () => 'Contact',
    blog: () => 'Blog',
    footer: () => 'This is the footer of the website. It and the header are separated from the main content of the page (and from the top/bottom of the screen) by use of the spread component.',
    phrase: () => 'This is a sentence that is written in English.',
    variablePhrase: ({ number }) => `This sentence takes an additional argument. Passed in number: ${number}.`,
  },
  t(key, params) {
    return this.translations[key](params);
  },
};
