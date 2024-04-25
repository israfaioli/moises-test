const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "m9sw72",
  e2e: {
    baseUrl: 'https://studio.moises.ai',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 60000,
    chromeWebSecurity: false,
  }, setupNodeEvents(on, config) {
    require('@cypress/grep/src/plugin')(config)
    return config
  },
})