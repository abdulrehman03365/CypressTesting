const { defineConfig } = require("cypress");
 const dotenv = require('dotenv');
// import cypress from "cypress";
// Load environment variables from the .env file
 dotenv.config();

// Access the baseUrl from process.env (loaded via dotenv)
const baseUrl = process.env.BASE_URL;

// Debugging: Log the base URL
console.log("Base URL:", baseUrl);

module.exports = defineConfig({
  experimentalSessionAndOrigin: true,
  e2e: {
    baseUrl: baseUrl,  // Use process.env.baseUrl here

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,    // Generates an HTML report
      json: false,   // Generates a JSON report
    },
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
