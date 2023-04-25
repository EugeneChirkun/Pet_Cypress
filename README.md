# Pet_Cypress
### Prerequisites
Ensure, that you have Node.js installed and Node Package Manager installed. Run in Command Prompt commands:
```shell
node -v
```
```shell
npm -v
```
### Project installation and initialisation
1. Download project to your local computer;
2. Open Command Prompt in project folder;
3. Run command to initialise project
```shell
npm init -y
```
4. Run command to install Cypress
```shell
npm install cypress
```

5. Run commands to check version and verify Cypress
```shell
npm cypress -v
```
```shell
npm cypress verify
```

### File upload in Cypress

Install plugin cypress-file-upload
```shell
npm install --save-dev cypress-file-upload
```

If you are using TypeScript, ensure your tsconfig.json contains
```json
"compilerOptions": {
  "types": ["cypress", "cypress-file-upload"]  }
  ```

Add to cypress/support/commands.js
```javascript
import 'cypress-file-upload';
```

Check this commands.js is imported in cypress/support/index.js 
(it might be commented)
// Import commands.js using ES2015 syntax:
```javascript
import './commands';
```

### File download in cypress

Install the module.

```shell
npm install cypress-downloadfile
```

Add the following line to `cypress/support/commands.js`.

```javascript
require('cypress-downloadfile/lib/downloadFileCommand')
```

### For Cypress 10 and above 
Add the following lines to `cypress.config.js`.
```javascript
const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
         on('task', {downloadFile})
      })
    }
  }
})
```

### For all Cypress versions below 10
Add the following lines to `cypress/plugins/index.js`.

```javascript
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}
```

If autocompletion does not work out of the box you can add the following line above your testfile

```javascript
/// <reference types="cypress-downloadfile"/>
```

### Running the project
To open Cypress, execute in Command Prompt
```shell
npx cypress open
```

To run tests in headless mode, using built-in browser Electron, execute in Command Prompt
```shell
npx cypress run
```