import getType from './getType'

// 산술 연산자 (arithmetic operator)

console.log(2 + 1)
console.log(4 - 1)
console.log(6 * 2)
console.log(12 / 4)

console.log(7 % 5) //나머지 값


// 할당 연산자 (assignment operator)

let a = 2
a = a + 1
a += 3   //위와 동일, 산술연산자 모두 사용가능

console.log(a)



// 비교 연산자(coparison operator)
const a = 1
const b = 3


console.log(a === b); // false

console.log(a !== b); // true
console.log(a < b); // ture
console.log(a > b); // ture
console.log(a <= b) // ture , =< : x  


console.log(2 == '2') // ture
console.log(2 === '2') // false


//논리 연산자()

const a = 1 === 1   
const b = 'AB' === 'AB' 
const c = false       

console.log(a) //ture
console.log(b) //ture
console.log(c) //false

console.log(a && b) // ture  and 연산자 그리고연산자'&& 모두 ture일때만 true
console.log(a && c) // false

console.log(a || b) // ture  or 연산자 또는 연산자
console.log(a || c) // ture

console.log(!a) // ture not 부정연산자 반대값 반환


// 삼항 연산자(ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓') 