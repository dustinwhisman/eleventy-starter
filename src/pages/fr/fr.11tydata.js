module.exports = {
  i18n: {
    lang: 'fr',
    dir: 'ltr',
    translations: {
      title: () => `Exemple de localisation et d'internationalisation`,
      description: () => `Cette page montre comment la localisation et l'internationalisation fonctionnent dans cette configuration de projet.`,
      phrase: () => `C'est une phrase qui est écrite en français.`,
      variablePhrase: ({ number }) => `Cette phrase prend un argument supplémentaire. Passé en nombre : ${number}.`,
    },
    t(key, params) {
      return this.translations[key](params);
    },
  },
};
