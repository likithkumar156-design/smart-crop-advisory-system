module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ta', 'bn', 'pa', 'mr'],
    localeDetection: true,
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en',
      },
    ],
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}