# Cypress Class - Bootcamp 202301

Con Cypress podemos hacer:

-   End-to-end tests
-   Component tests
-   Integration tests
-   Unit tests

Esta clase se enfoca en tests e2e:
Cypress se diseñó originalmente para ejecutar test end-to-end(E2E). Una prueba E2E típica visita la aplicación en un navegador y realiza acciones a través de la interfaz de usuario, como lo haría un usuario real.

Podemos usar Cypress para testear cualquier Framework (Angular, React, Vue).

### Instalación:

Cypress: <br>
`npm i cypress @cypress/code-coverage --save-dev`

### Configuración de EsLint:

Plugin de EsLint: <br>
`npm i eslint-plugin-cypress --save-dev`

Modificar package.json (o archivo de configuración de EsLint de tenerlo):

```
"eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest",
            "prettier"
        ],
        "files": [
            "src/**/*.spec.cy.ts"
        ],
        "parserOptions": {
            "project": "./tsconfig.spec.json"
        },
        "plugins": [
            "cypress"
        ],
        "env": {
            "cypress/globals": true
        }
    },
```

Luego hacemos un <br>
`npm i`

Para ejecutar el entorno de test hacemos <br>
`npx cypress open`

### Configuración de Cypress

-   En el archivo cypress.config.ts:

```
import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require("@cypress/code-coverage/task")(on, config);
            // include any other plugin code...

            // It's IMPORTANT to return the config object
            // with any changed environment variables
            return config;
            // implement node event listeners here
        },
        baseUrl: "http://localhost:3000/",
    },
});
```

-   En la carpeta Cypress hacemos un archivo llamado tsconfig.json:

```
{
    "extends": "../tsconfig.json",
    "compilerOptions": {
        "target": "es5",
        "lib": ["es5", "dom"],
        "types": ["cypress"], // Esto eos para que use los tipos de cypress que vienen con el paquete
        "isolatedModules": false // Esto es para que no se queje de los imports
    },
    "include": ["**/*.ts"]
}
```

-   En el fichero Cypress/e2e.ts, agregamos la línea:

```
import '@cypress/code-coverage/support';
```

Finalmente en la carpeta Cypress creamos una carpeta llamada e2e, donde vamos a generar nuestros tests.

Links:
Testing e2e: https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test <br>
Testing components: https://docs.cypress.io/guides/component-testing/overview
