import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);
            // include any other plugin code...

            // It's IMPORTANT to return the config object
            // with any changed environment variables
            return config;
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:3000/',
    },
});
