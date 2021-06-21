/*eslint-disable*/

const a  =require('./a')

console.log(a);

setTimeout(() => {
  const b = require('./a');
  console.log(b)
}, 200);
