const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'x1d4qa',
  e2e: {
    baseUrl: 'https://studio.moises.ai',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
  }, setupNodeEvents(on, config) {
    require('@cypress/grep/src/plugin')(config)
    return config
  },
})