module.exports = {
  translations: {
    title: () => 'Localization and Internationalization Example',
    description: () => 'This page demonstrates how localization and internationalization works in this project setup.',
    phrase: () => 'This is a sentence that is written in English.',
    variablePhrase: ({ number }) => `This sentence takes an additional argument. Passed in number: ${number}.`,
  },
  t(key, params) {
    return this.translations[key](params);
  },
};
