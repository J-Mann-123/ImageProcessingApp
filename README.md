ABOUT THIS PROJECT:

This is an image processing app. It is used to process image sizes and make them smaller within the URL.
It would then save the updated image into a new folder called thumbs.

TO RUN PROJECT:
1. npm run build - to build edited-JohnWick.jpg
2. npm run start - to start server
3. Use this link to edit the image: http://localhost:3000/resize?imageUrl=https://localhost:3000/images/JohnWick.jpg&width=340&height=380

HOW TO TEST PROJECT:
1. npm run build
2. npm run start
3. npm test - NOTE: The app must be fully built and you must open the image link for this project to work

SCRIPTS TO RUN TO START A TYPESCRIPT PROJECT

downloading:
npm i --save-dev typescript
npm i --save-dev prettier
npm i --save-dev eslint
npm i --save-dev ts-node
npm i --save-dev @types/node
npm i --save-dev eslint-config-prettier
npm i --save-dev eslint-plugin-prettier

npm i @types/node --save-dev

configuration and conifuration files:
npm init
npm init -y (skips questionare)
npx tsc --init
eslint --init (this will also download a bunch of dependecies)

Helpful configurations:
Make sure to wait for everything to download before changing anything in the package files.

---

In package.json
scripts: {
"build": "npx tsc"
"lint": "eslint 'index.js'",
"prettier": "prettier --config .prettierrc '\*.js' --write"
}

---

---

In tsconfig.json change the below settings:

"compilerOptions": {
"target": "es5",  
 "module": "commonjs",  
 "lib": ["ES2018", "DOM"],
"outDir": "./build",  
 "strict": true,  
 "noImplicitAny": true,  
 },
"exclude": ["node_modules", "tests"] at the bottom of the tsconfig.json file
}

---

Folders/Files to create:
/src
index.ts in /src

you could also look into settings and change default settings for eslint/prettier formatting

Then you can build by running:
npm run build
node build/. (build the index.ts file)

If this has been done correctly, it should output this:

> jasmine@1.0.0 build C:\Users\james\Documents\Udacity\Jasmine
> npx tsc

Eslint config options:

scripts: "lint": "eslint src/",

eslintrc.js parserOptions { project: "tsconfig.json" }

Prettier Options

scripts: "format": "npx prettier --write ."

SCRIPTS TO RUN TO START JASMINE

npm i jasmine
npm i jasmine-spec-reporter
npm i --save-dev @types/jasmine

testing scripts
In package.json, under scripts add "jasmine": "jasmine"

Set Up the File Structure:

1. In the root directory of the project, create a folder named spec.
2. In the spec folder, create a folder named support.
3. In the support folder, create a file named jasmine.json to hold the primary configurations for Jasmine.
4. In the src folder, add a folder named tests.
5. In tests add a file named indexSpec.ts to hold the tests for code in the index.js file.
6. In the tests folder, add another folder named helpers.
7. In helpers, add a file named reporter.ts. This will be the primary configuration for your spec reporter.

File structure:

├── node_modules
├── spec
│ └── support
│ └── jasmine.json
├── src
│ ├── tests
│ │ ├── helpers
│ │ │ └── reporter.ts
│ │ └── indexSpec.ts
│ └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json

In the reporter.ts file add:

import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
public displayJasmineStarted(info: SuiteInfo, log: string): string {
return `${log}`;
}
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
spec: {
displayStacktrace: StacktraceOption.NONE
},
customProcessors: [CustomProcessor],
}));

In jasmine.json add:

{
"spec_dir": "dist/tests",
"spec_files": [
"**/\*[sS]pec.js"
],
"helpers": [
"helpers/**/\*.js"
],
"stopSpecOnExpectationFailure": false,
"random": false
}

In the tsconfig.json file add:
"exclude": ["node_modules", "./dist", "spec"]

In the package.json file add:
"test": "npm run build && npm run jasmine"

To test that it works, add a test in indexSpec.ts

export default myFunc;

```
it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});
```

In index.ts this is a line you can add to test
const myFunc = (num: number): number => { return num \* num; };

Then run this to test the above test
npm run build
npm run jasmine

SCRIPTS TO RUN TO START EXPRESS

setting up Express

npm i
npm i express
npm i --save-dev @types/express
npm i --save-dev nodemon

in package.json file, in the scripts seciton look at start and type:

"start": "nodemon src/index.ts"

---

In index.ts file, type:

import express from 'express';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
res.send('Hello, world!');
});

app.listen(port, () => {
console.log(`server started at localhost:${port}`)
});

---

After this has been put into the index.ts file, run:

npm run start

Then you can test in the browser if http://localhost:3000/api is going to the API route and it returns: Hello, world!

then run npm run build to create the build for the project
Then you can test if the server has started again by running:
npm run build
node build/.

Setting up Router
