/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  eslint: { dirs: ['src'] },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
}
