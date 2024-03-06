const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "bpsi39",
  defaultCommandTimeout: 120000,
  responseTimeout: 120000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout:120000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  chromeWebSecurity: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://dashboard-staging.co',
    excludeSpecPattern: ['*.hot-update.js', '*.method.js'],
    experimentalSessionAndOrigin: true
  },
})
