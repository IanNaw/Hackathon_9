// Ejercicio numero 1 ////////////////////////////////////////////////////
function pregunta1(primerNumero, SegundoNumero) {
    console.log(`Primer ejercicio: ${primerNumero * SegundoNumero} `)
}

pregunta1(4, 5);
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 2 ////////////////////////////////////////////////////
function pregunta2(primerExamen, segundoExamen, tercerExamen, cuartoExamen) {
    console.log(`Segundo ejercicio: ${(primerExamen + segundoExamen + tercerExamen + cuartoExamen) / 4
        } `)
}

pregunta2(15, 16, 18, 20);
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 3 ////////////////////////////////////////////////////
function pregunta3(base, altura) {
    console.log(`Tercer ejercicio: area del rectangulo ${base * altura}cm`)
}

pregunta3(4, 8)
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 4 ////////////////////////////////////////////////////
function pregunta4(base, altura) {
    console.log(`Cuarto ejercicio: area del triangulo ${(base * altura) / 2}cm`)
}

pregunta4(4, 19)
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 5 ////////////////////////////////////////////////////
function pregunta5(radio, π) {
    console.log(`Quinto ejercicio: area de la circunferencia ${(radio * radio) * π}cm`)
}

pregunta5(5, 3.14)
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 6 ////////////////////////////////////////////////////
function pregunta6() {
    const horas = Number(prompt('Ingresa tus horas...'));

    if (horas >= 1 && horas <= 5) {
        console.log('Te pagaremos 80 soles.')
    } else if (horas >= 6 && horas <= 15) {
        console.log(`Te pagaremos 300 soles`)
    } else if (horas >= 16 && horas <= 168) {
        console.log(`Te pagaremos 500 soles`)
    } else if (horas <= 0 && horas >= 169) {
        console.log(`No te pagmos nada por chistoso`)
    }

}

// pregunta6()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 7 ////////////////////////////////////////////////////
function pregunta7() {
    const metros = Number(prompt('Ingresa metros de la tela...'));
    const pulgadas = Math.round(metros / 0.0254)
    console.log(`Septimo ejercicio: ${pulgadas} pulgadas`)
}

// pregunta7()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 8 ////////////////////////////////////////////////////
function pregunta8() {
    const soles = Number(prompt('Ingresa la cantidad de soles que desee convertit...'))
    const dolares = Math.round(soles / 3.64)
    console.log(`Octavo ejercicio: La cantidad en dolares serian ${dolares} dolares`)
}

// pregunta8()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 9 ////////////////////////////////////////////////////
function pregunta9() {
    const fechaNacimineto = Number(prompt(`Ingreso su fecha de nacimineto...`))
    const edad = (2021 - fechaNacimineto)
    console.log(`Noveno ejercicio: Su edad es ${edad}`)
}

// pregunta9()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 10 ///////////////////////////////////////////////////
function pregunta10A(personas) {

    let personaMenor = personas[0];

    personas.forEach((persona, index) => {
        if (personas[index + 1] === undefined) {
            return;
        }
        if (personaMenor.edad > personas[index + 1].edad) {
            personaMenor = personas[index + 1]
        }

    })

    return (personaMenor)

}

const personas = [{ nombre: 'Julio', edad: 50 }, { nombre: 'Edgar', edad: 18 }, { nombre: 'Fernando', edad: 70 }]


const personaMenor = pregunta10A(personas)
console.log(personaMenor)
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 11 ///////////////////////////////////////////////////
function pregunta11() {
    const años = Number(prompt(`Cuantos años lleva trabajando en la tienda...`))
    if (años === 1) {
        console.log(`Tu bono por antiguedad es de $100`)
    } else if (años === 2) {
        console.log(`Tu bono por antiguedad es de $200`)
    } else if (años === 3) {
        console.log(`Tu bono por antiguedad es de $300`)
    } else if (años === 4) {
        console.log(`Tu bono por antiguedad es de $400`)
    } else if (años === 5) {
        console.log(`Tu bono por antiguedad es de $500`)
    } else if (años > 5) {
        console.log(`Tu bono por antiguedad es de $1000`)
    } else if (años < 1) {
        console.log(`No seas troll`)
    }
}

pregunta11()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 12 ///////////////////////////////////////////////////
function pregunta12() {
    const salario = 1500;
    const salario1 = salario * 1.10;
    const salario2 = salario1 * 1.10;
    const salario3 = salario2 * 1.10;
    const salario4 = salario3 * 1.10;
    const salario5 = salario4 * 1.10;
    const salario6 = Math.round(salario5 * 1.10);
    console.log(`Duodecimo ejercicio: el salario denrto de seis años sera $${salario6}`)
}

pregunta12()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 13 ///////////////////////////////////////////////////
function pregunta13() {
    const calificaciones = [14, 15, 16, 18, 09, 13, 03, 20, 20, 13, 11, 17, 13, 18, 16, 17, 20, 09, 05, 12, 17, 13, 16, 18, 20]

    let aprobados = 0;
    let desaprobados = 0;

    calificaciones.forEach(calcularAprobados => {
        if (calcularAprobados >= 0 && calcularAprobados <= 11)
            desaprobados++;
        if (calcularAprobados >= 12 && calcularAprobados <= 20)
            aprobados++;
    })

    const clasificacionClase = [{ CantidadAprobados: aprobados }, { CantidadDesaporbados: desaprobados }]

    console.log(`Descima Tercer ejercicio: ${JSON.stringify(clasificacionClase)}`)
}

pregunta13()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 14 ///////////////////////////////////////////////////
function pregunta14() {
    const focos = ['verde', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'blanco', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'rojo', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde', 'verde']

    let focosVerdes = 0;
    let focosRojos = 0;
    let focosBlancos = 0;

    focos.forEach(color => {
        if (color === 'verde')
            focosVerdes++;
        if (color === 'rojo')
            focosRojos++;
        if (color === 'blanco')
            focosBlancos++;

    })

    const focosContados = [{ color: 'Verde', cantidad: focosVerdes }, { color: 'Rojo', cantidad: focosRojos }, { color: 'Blanco', cantidad: focosBlancos }]
    console.log(`Decimo Cuerto ejercicio: ${JSON.stringify(focosContados)}`)
}

pregunta14()
//////////////////////////////////////////////////////////////////////////


// Ejercicio numero 15 ///////////////////////////////////////////////////
function pregunta15() {
    const edad = prompt('Cuantos años tienes...')
    if (edad >= 0 && edad <= 17) {
        console.log('Usted no puede votar')
    } else if (edad >= 18 && edad <= 100) {
        console.log('Uested puede votar')
    }
}

pregunta15()