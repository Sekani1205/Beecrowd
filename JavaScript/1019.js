let segundos = Number(140153)
let hora = Math.trunc(segundos / 3600)
let minutos = Math.trunc((segundos % 3600) / 60)
let segundos_restantes = Math.trunc((segundos % 3600) % 60)

console.log(`${hora.toFixed(0)}:${minutos.toFixed(0)}:${segundos_restantes.toFixed(0)}`)