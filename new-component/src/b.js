/*eslint-disable*/

import a from '../../a'

console.log(a);

setTimeout(() => {
  const b = require('../../a').a;
  console.log(b)
}, 200);
