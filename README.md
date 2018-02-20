[![Build Status](https://travis-ci.org/martialblog/ceql.svg?branch=master)](https://travis-ci.org/martialblog/ceql)
[![Coverage Status](https://coveralls.io/repos/github/martialblog/ceql/badge.svg?branch=master)](https://coveralls.io/github/martialblog/ceql?branch=master)

# CEQL.js

A CEQL library in Javascript.

## What is CEQL?

CEQL is the Common Elementary Query Language, designed by Stefan Evert as a novice-friendly alternative to the normal CQP query syntax.

- https://cqpweb.lancs.ac.uk/doc/CQPweb-CEQL-manual.html
- http://cwb.sourceforge.net/ceql.php

# Support

| Annotation | Syntax | Supported |
|------------|--------|-----------|
| Word       | pattern    | :white_check_mark: |
| Primary    | _pattern   | :white_check_mark: |
| Secondary  | {pattern}  | :white_check_mark: |
| Tertiary   | _{pattern} | :white_check_mark: |
| Combo      | {pattern1/pattern2}  | :x:  |

# Usage

## Quick start

```js
var ceql = require('ceql');

// Transform CEQL Query into RegExp
var p = ceql.toregex('some[string,orelse]');
console.log(p)
> /some(string|orelse)/

// Validate a given String (is valid CEQL input)
var v = ceql.validate('super_VERB');
console.log(v)
> true
```
