import { defineConfig } from "cypress";

export default defineConfig({
  experimentalSourceRewriting: true,
  chromeWebSecurity: false,

  hosts: {
    "*.localhost": "127.0.0.1",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
