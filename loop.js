//반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}

// 종료조건 값이 false 가될때까지 반복

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i+1}`
  if ((i + 1)% 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}



// for (let i = 0; i < 3; i += 1) {
//   console.log(i)
// }