# CEQL.js

A CEQL parser in Javascript

## What is CEQL?

CEQL is the Common Elementary Query Language, designed by Stefan Evert as a novice-friendly alternative to the normal CQP query syntax.

- https://cqpweb.lancs.ac.uk/doc/CQPweb-CEQL-manual.html
- http://cwb.sourceforge.net/ceql.php

# Usage

## Installation

```bash
npm install --save ceql
```

## Quick start

```js
var ceql = require('ceql');
var options = {ignoreCase: true};

// Parse a String to CEQL object
var p = ceql.parse('somestring', options);
console.log(p)
> {word: 'somestring', primary: undef, secondary: undef}

// Validate a given String (is valid CEQL input)
var v = ceql.validate('somestring');
console.log(v)
> true
```
