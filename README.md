# check-npm-name

Zero dependency micro-library that returns `true` if the name is already taken and `false` if the name is still available.

### Usage

```javascript
const check = require('check-npm-name')

check('check-npm-name')
    .then((isTaken) => {
      console.log(isTaken) // true
    })
```

```javascript
import check from 'check-npm-name'

async function foo() {
  const isAlreadyTaken = await check('react')
  console.log(isAlreadyTaken) // true
  const isAlreadyTaken2 = await check('giant-citrus-is-looking-for-you')
  console.log(isAlreadyTaken2) // false
}
```

### Features
You can get detailed report about requested package
```javascript
const check = require('check-npm-name')

async function foo() {
  const detailedResponse = await check('neura', {full: true})
  
  console.log(detailedResponse)
  /**
  *{
  * time: { created: '2017-07-03T17:38:47.172Z'},
  *  homepage: 'https://github.com/neura-js/neura#readme',
  *  keywords: [
  *   'javascript',
  *   'science',
  *   'matrix',
  *   'array',
  *   'neural network',
  *   'js',
  *   'machine learning'
  *  ],
  *  repository: { type: 'git', url: 'git+https://github.com/neura-js/neura.git' },
  *  author: { name: 'alexile' },
  *  bugs: { url: 'https://github.com/neura-js/neura/issues' },
  *  license: 'MIT',
  *  readmeFilename: 'README.md'
  *}
  */
}
```
