Try QUnit
=======

[![Build Status](https://travis-ci.org/PabloVallejo/try-qunit.svg?branch=master)](https://travis-ci.org/PabloVallejo/try-qunit)

This repository contains basic examples of how to run JavaScript tests using [QUnit]().
The tests are based on a `Calculator` object, they make sure that the four methods this object has `sum`, `substract`, `divide` and `multiply` work properly.

# Running Tests

```bash
# Clone the repo and cd into it.
$ git clone https://github.com/PabloVallejo/try-qunit.git && cd try-grunt
```

After cloning the pository, you can either run tests in the browser or using [Grunt]().

**Browser**
![](https://raw.githubusercontent.com/PabloVallejo/try-qunit/master/qunit.png)

Open `tests/index.html` directly and take a look at tests results

**Grunt**
![](https://raw.githubusercontent.com/PabloVallejo/try-qunit/master/grunt.png)

```bash
# Install dependencies
$ npm install

# Run tests using Grunt
$ grunt 
```




