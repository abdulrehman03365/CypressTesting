const { defineConfig } = require("cypress");

module.exports = defineConfig({
  specPattern: [
    'cypress/e2e/**/*.cy.js',
    'cypress/integrations/**/*.cy.js'
  ],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
