module.exports = {
  lang: 'en',
  dir: 'ltr',
  translations: {
    phrase: () => 'This is a sentence that is written in English.',
    variablePhrase: ({ number }) => `This sentence takes an additional argument. Passed in number: ${number}`,
  },
  t(key, params) {
    return this.translations[key](params);
  },
};
