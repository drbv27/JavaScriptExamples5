/*Ejercicios Basicos JS Nivel 5
    15.Programa una función para convertir números de base binaria a decimal y viceversa.Ejemplo: miFuncion(100,2) devolverá 4 base 10.
    16.Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada.Ejemplo: miFuncion(1000, 20) devolverá 800.
    17.Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy.Ejemplo: miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

//Soluciones:

//--------------------------------------------------------------------------------------------

//E15S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 15:")

function binDEC(num=undefined,base=undefined) {
    if (num===undefined) return console.warn('No digitaste un numero')
    if (base===undefined) return console.warn('No digitaste una base')
    if (base!==2 && base!==10) return console.error('Base no valida')

    if (base===2) {
        let arr
        let i =0
        let dec = 0
        arr = num.toString().split("").reverse()
        arr.forEach(element => {

            dec += parseInt(element)*(2**i)
            i++
        });
        console.info(`El numero Binario ${num} es equivalente al decimal ${dec}`)
    }

    if (base===10) {
        let calc = num*2,
            bin=0,
            arr = []
        while (calc > 1) {
            calc = parseInt(calc/2)
            arr.push(calc%2)
            bin = parseInt(arr.join(""))
        }
        console.log(`El numero ${num} Decimal, equivale a ${bin} en Binario`)
    }
}
binDEC(1111,2)

//--------------------------------------------------------------------------------------------

//E16S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 16:")

const descuento = (valor=undefined,des=0) => {
    if (valor===undefined) return console.warn('No digitaste un valor')
    if (des===0) {
        console.log(`El valor de ${valor} NO tiene descuento.
        Total= $${valor}`)
    } else {
        descuent = (valor-((valor*des)/100))
        console.log(`El valor de ${valor} tiene un descuento de ${des}%.
        Total= $${descuent}`)
    }
}
descuento(100,20)


//--------------------------------------------------------------------------------------------

//E17S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 17:")

function fecha(year,month,day) {
    let inicial,
        final,
        finalL;
    inicial = new Date (year,(month-1),day)
    final= Date.now()
    finalL= Date(final)
    total=((final-inicial)/31536000000).toFixed(1)
    console.log(`Han pasado ${total} años desde ${inicial.toDateString()}, hasta Hoy`)
}
fecha(2020,5,11)