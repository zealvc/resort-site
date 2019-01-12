const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'ja',
      iso: 'ja-JP',
      name: 'Japanese',
      file: 'ja.js'
    },
    {
      code: 'km',
      iso: 'km-KH',
      name: "Khmer",
      file: 'km.js'
    }
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  strategy: 'prefix_except_default',
  vueI18n: {
    fallbackLocale: 'en'
    // messages: { en, ja, km }
  },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  }
}

module.exports = {
  I18N
}
