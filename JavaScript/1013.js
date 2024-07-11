let a = 217
let b = 14
let c = 6

let ab = ((a + b) + Math.abs(a - b)) / 2
let maior = ((ab + c) + Math.abs(ab - c)) / 2

console.log(`${maior} eh o maior`)