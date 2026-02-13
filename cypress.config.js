import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    testIsolation: false, // Prevents about:blank between tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
