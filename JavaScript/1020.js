let dias = 800
let anos = Math.trunc(dias / 365)
let meses = Math.trunc((dias % 365) / 30)
let dias_restantes = Math.trunc((dias % 365) % 30)


console.log(`${anos.toFixed(0)} ano (s)\n${meses.toFixed(0)} mes (es)\n${dias_restantes.toFixed(0)} dia (s)`)