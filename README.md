<h1 align="center"> Bonus calculation Testing</h1>

## Table of Contents

- [About](#about)
- [Pre-requisites](#pre-requisites)
- [Installation procedure](#installation-procedure)
- [Test script execution](#test-script-execution)
- [Documentation](#documentation)

## About

Provided scripts are for *Home Work 10.2* in *"QA инженер. Полная автоматизация"* course provided by [ITSwitcher](https://it-switcher.online/).
Provided scripts are written on [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) and performs following tasks:

- showTopStudentinGroup.js - search of top student in each groups in students-data.json

Script showTopStudentinGroup.js works as following:
1. Script imports students list distributed by groups from students-data.json file
2. Script sort all students by scores (dessending) and by Date (assending) within a group


## Pre-requisites
The following programs and SW packages should be installed to prior of script tests.
1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/en/) (version 16.18.0 or higher)
3. [npm](https://www.npmjs.com/) (version 8.19.2 or higher)
4. [Jest](https://jestjs.io)
5. [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul)

PS: npm will be installaed with Node.js installation

## Installation procedure
1. Copy this package from the git: Code -> Download ZIP
2. Unzip loaded file (HW10_2-main.zip) to appropriate location on you computer. Folder HW10_2-main will be created accordingly.
3. Open this folder in Visual Studio Code
4. Open terminal window in Visual Studio Code and execute following commands:

```bash
npm install --save-dev jest
```

```bash
npm install --save-dev babel-plugin-istanbul
```

## Test script execution
### Common tests statistics
Execute following command in Visual Studio Code terminal window:

```bash
npm run test
```
Script hw9_3.test.js will be executed and test results wil be presented in terminal window as follwoing:
```bash
> hw9_4@1.0.0 test
> jest

 PASS  ./hw9_3.test.js
  Bonus calculation - positive tests
    ✓ Positive tests (1 ms)
    ✓ Boundary values (1 ms)
    ✓ Negative (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.343 s, estimated 1 s
Ran all test suites.
```
### Test coverage statistics
You can execute following command and see coverage statistics:
```bash
npx jest --coverage
```
Folder "coverage" will be created in your project explorer as result of executon of this command.

Please expand this folder and find "index.html" file in "Icov-report" sub-folder.

Right click "index.html" file and open it as "Open with Live Server". Browser will be opened with general coverage statistics.

You can drill down into report by clicking on the tested file name (hw9_3,js). You will see all lines of tested script and number of calls for each line. 
This info allow us to:
- be sure all code lines covered by the tests
- be sure all code branches covered by the tests
- avoid executing extra tests
- save time executing tests suits

## Documentation

Official documentation on all used tolls and programm packages could be found by the following links:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Jest](https://jestjs.io)
- [babel-plugin-istanbul](https://www.npmjs.com/package/babel-plugin-istanbul)
- [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
