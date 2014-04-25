Try QUnit
=======

[![Build Status](https://travis-ci.org/PabloVallejo/try-qunit.svg?branch=master)](https://travis-ci.org/PabloVallejo/try-qunit)

This repository contains basic examples on how to run JavaScript tests using [QUnit](https://qunitjs.com/).
The tests are based on a `Calculator` object, they make sure that the four methods this object has `sum`, `substract`, `divide` and `multiply` work properly.

## Running Sample Tests

```bash
# Clone the repo and cd into it.
$ git clone https://github.com/PabloVallejo/try-qunit.git && cd try-qunit
```

After cloning the pository, you can either run tests in the browser or using [Grunt](http://gruntjs.com/).

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

## Contributing

Feel free to drop a pull request if you want to see something added to this repository.




