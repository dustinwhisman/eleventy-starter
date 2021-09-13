module.exports = {
  i18n: {
    lang: 'es',
    dir: 'ltr',
    translations: {
      title: () => 'Ejemplo de localización e internacionalización',
      description: () => 'Esta página demuestra cómo funciona la localización y la internacionalización en la configuración de este proyecto.',
      phrase: () => 'Esta es una oración que está escrita en español.',
      variablePhrase: ({ number }) => `Esta oración tiene un argumento adicional. Aprobado en número: ${number}.`,
    },
    t(key, params) {
      return this.translations[key](params);
    },
  },
};
