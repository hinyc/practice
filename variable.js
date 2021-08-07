// 변수 유효범위 (Variable Scope)
// var, let, const

// let, const block level 유효범위
// var function level 유효범위 --> 의도하지 않은 범위에서 사양될수 있고, 추가적인 메모리가 사용됨.


// function scope() {
//   if (true) {
//     const a =123
//     console.log(a)
//   }
// }
// scope()



// function scope() {
//   if (true) {
//     const a =123
//   }
//   console.log(a)
// }
// scope()


function scope() {
  if (true) {
    console.log(a)
    const a =123
  }
}
scope()
