let today = new Date();
let year = today.getFullYear();

// function Friend(name, age) { 
//   this.name = name;
//   this.age = age;
// }

// Friend.prototype.birthYear = function () {
//   let bYear = year +1 -this.age;
//   return `${this.name} ${bYear}`
// }


class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  birthYear() {
    let bYear = year + 1 - this.age;
    return `${this.name} ${bYear}`;
  }
}


const jeong =new Friend('Hun', 31);
const park = new Friend('Yung', 27);
const lee = new Friend('Yum', 30);

console.log(jeong.birthYear())
console.log(park.birthYear())
console.log(lee.birthYear())




// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// // new 객체 데이터 생성
// //리터럴방식이란 [] {} ""등으로 문자 배열 객체등을 만든느것
// const hinyc = new User('Hincy', 'Hong');
// const lim = new User('lim', 'Lee');
// const woo = new User('Woo', 'Hong');

// console.log(heropy)
// console.log(amy.getFullName())
// console.log(neo.getFullName())






// const heropy = {
//   firstName: 'Heropy',
//   lastName: 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(heropy.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())