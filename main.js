import _ from 'lodash'; //경로 설정이 안되있으면 'node modules' 에서 가저옴!
import getType from './getType'; // getType.js 파일의 getType 함수 가저옴.
import getRandom from './getRandom' // getRandom.js 파일의 getRandom 함수 가저옴.
import test1 from './test1'


console.log(getType1(1));
console.log(test1());
// console.log(_.camelCase('the hello world'));
// => theHelloWorld
console.log(getType([0, 3, 5]));
console.log(getRandom());

function getType1(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
