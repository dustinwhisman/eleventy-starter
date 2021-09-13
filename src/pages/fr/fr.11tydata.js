module.exports = {
  i18n: {
    lang: 'fr',
    dir: 'ltr',
    translations: {
      siteName: () => 'Eleventy démarreur',
      title: () => `Exemple de localisation et d'internationalisation`,
      description: () => `Cette page montre comment la localisation et l'internationalisation fonctionnent dans cette configuration de projet.`,
      docs: () => 'Documentation',
      contact: () => 'Contact',
      blog: () => 'Blog',
      footer: () => `C'est le pied de page du site. Celui-ci et l'en-tête sont séparés du contenu principal de la page (et du haut/bas de l'écran) par l'utilisation du composant spread.`,
      phrase: () => `C'est une phrase qui est écrite en français.`,
      variablePhrase: ({ number }) => `Cette phrase prend un argument supplémentaire. Passé en nombre : ${number}.`,
    },
    t(key, params) {
      return this.translations[key](params);
    },
  },
};
