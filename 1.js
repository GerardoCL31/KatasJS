//Crea una función suma(a, b) que devuelva la suma de ambos números.

function suma(a,b){
    return a+b
}
console.log(suma(1,2))

//Escribe una función saludar(nombre) que devuelva "Hola, <nombre>".
function saludar(nombre){
    console.log("Hola", nombre)
}
saludar("pepeee")

//Crea una función longitud(str) que devuelva cuántos caracteres tiene.

function longitud(str){
    return str.length;
}
console.log(longitud("Holaaaa"))

// cuadrado de un numero
function cuadrado(n){
    return n*n
}
console.log(cuadrado(5))

//Función primeraLetra(str) → devuelve el primer carácter de un string.

function primeraLetra(str){
    return str[str.length-1]
}
console.log(primeraLetra("HIuou"))

//¿Es par?
function parImpar(num){
    if (num%2==0) {
        return "Es par"
    }else{
        return "Es impar"
    }

}
console.log(parImpar(22))

//mayor de dos numeros

function mayor(a,b){
    if (a>b) {
        return a
    }else{
        return b
    }
}
console.log(mayor(4,21 + " Es mayor"))

/*Clasificar edad
Función que reciba una edad y devuelva

"niño" (< 12)

"adolescente" (12–17)

"adulto" (18–64)

"anciano" (65+)*/

function edad(edad){
    if (edad<12) {
        return "Es un niño"
    }else if(edad>=12 && edad<=17){
        return "Es adolescente"
    }else if(edad>=18 && edad<=64){
        return "Es adulto"
    }else if(edad>65){
        return "Es anciano"
    }else{
        return"No valida"
    }
}
console.log(edad(9))
console.log(edad(14))
console.log(edad(18))
console.log(edad(70))
console.log(edad("x"))

//Positivo, negativo o cero

function queEs(num){
    if(num===0){
        return "Es cero"
    }else if(num>0){
        return "Positivo"
    }else{
        return "Es negativo"
    }
}
console.log(queEs(0))
console.log(queEs(4))
console.log(queEs(-3))

//Contraseñas valida

function valida(str){
    if(str.length>8){
        return "Valida"
    }else{
        return "No valida"
    }
}
console.log(valida("fatimafatima"))
console.log(valida("fat"))


function contar(n){
    for (let index = 0; index <= n; index++) {
        console.log(index)
    }
}
contar(10)

// sumar la suma de todos los numero hasta n


function todosLosNumeroHastaN(n){
    let suma=0
    for (let index = 0; index <=n; index++) {
        suma=suma+index
    } return suma
}
console.log(todosLosNumeroHastaN(10))

//Contar vocales
//Devuelve cuántas vocales tiene un string.

//Tabla de multiplicar
//Dado un número, devuelve un array con su tabla del 1 al 10.

function tabla(num){
    i=0
    while(i<=10){
        console.log(num*i)
        i++
    }
}
tabla(21)

//Invertir string (sin usar reverse)
//Devuelve el string al revés usando un bucle.

function reverse(str){
    let invertido=""
    for (let index = str.length -1; index>=0; index--) {
        invertido=invertido+str[index]
    }return invertido
}
console.log(reverse("Patatas"))


//Obtener el mayor del array
//Sin usar Math.max.

function maxArray(arr){
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max=arr[i]
        }
        
    }
    return max
}
console.log(maxArray([4,5,7,9,15]))

//Filtrar pares
//Devuelve un nuevo array con solo los números pares.

function arrayPar(arr){
    let par=[]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===0){
            par.push(arr[i])
        }
        
    }
    return par
}
console.log(arrayPar([4,5,6,7,22]))

//sumar numeros de un array

function sumar(arr){
    let suma=0
    for (let i = 0; i < arr.length; i++) {
        suma=suma+arr[i]
    }
    return suma
}
console.log(sumar([4,5,6,10]))

//multiplicar numeros de un array

function multiplicarArray(arr){
let multiplicacionTotal=1

    for (let i = 0; i < arr.length; i++) {
        multiplicacionTotal=multiplicacionTotal*arr[i]
        
    }
    return multiplicacionTotal
}
console.log(multiplicarArray([2,5,4,1]))

function dobleCadaNumero(arr){
    let doble=[]

    for (let i = 0; i < arr.length; i++) {
        doble.push(arr[i]*2)
        
    }
    return doble
}
console.log(dobleCadaNumero([2,4,5,8]))

//Eliminar duplicados (nivel básico)
function eliminarDuplicados(arr){
    let resultado=[]

for (let i = 0; i < arr.length; i++) {
    if(!resultado.includes(arr[i])){
        resultado.push(arr[i])
    }
    
}
return resultado
}
console.log(eliminarDuplicados([2,2,4,5,4,9,10,9]))

// convertir array a mayusculas
//dado un array de string deveolver todas en mayus


function mayus(arr){
let arrayFinal=[]

for (let i= 0; i < arr.length; i++) {
    arrayFinal.push(arr[i].toUpperCase())
    
}
return arrayFinal
}

console.log(mayus(["hola","Hii","bye"]))

