         //X1  Y1    
let p1 = [1.0, 7.0]
        //X2   Y2
let p2 = [5.0, 9.0]
let distancia = (((p2[0] - p1[0]) ** 2) + ((p2[1] - p1[1]) ** 2)) ** (1 / 2)

console.log(`${distancia.toFixed(4)}`)