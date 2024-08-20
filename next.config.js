const { i18n } = require('./next-i18next.config.js')

module.exports = {
    experimental: {
        outputStandalone: true,
    },
    reactStrictMode: true,
    i18n,
}
