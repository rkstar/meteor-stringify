stringify
===============

This package provides a single function to stringify a Javascript object.  It returns a string identical to JSON.stringify, but without the (") quotes around the object keys.

## Installation
`meteor add rkstar:stringify`

## Usage
```javascript
Stringify({
    foo: 'bar',
    num: 9,
    arr: ['array'],
    obj: {my: "object"}
})
 => '{foo:"bar", num:9, arr:['array'], obj:{my:"object"}}'
```