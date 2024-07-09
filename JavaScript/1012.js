let a = 2
let b = 4
let c = 5

let ab = ((a + b) + Math.abs(a - b)) / 2
let maior = ((ab + c) + Math.abs(ab - c)) / 2

console.log(`${maior} eh o maior`)