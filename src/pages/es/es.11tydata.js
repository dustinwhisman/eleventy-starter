module.exports = {
  i18n: {
    lang: 'es',
    dir: 'ltr',
    translations: {
      siteName: () => 'Eleventy inicial',
      title: () => 'Ejemplo de localización e internacionalización',
      description: () => 'Esta página demuestra cómo funciona la localización y la internacionalización en la configuración de este proyecto.',
      docs: () => 'Documentación',
      contact: () => 'Contacto',
      blog: () => 'Blog',
      footer: () => 'Este es el pie de página del sitio web. Este y el encabezado están separados del contenido principal de la página (y de la parte superior / inferior de la pantalla) mediante el uso del componente de propagación.',
      phrase: () => 'Esta es una oración que está escrita en español.',
      variablePhrase: ({ number }) => `Esta oración tiene un argumento adicional. Aprobado en número: ${number}.`,
    },
    t(key, params) {
      return this.translations[key](params);
    },
  },
};
