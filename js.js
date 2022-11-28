//El monto de la CUOTA Es un gasto fijo.
// Costo Financiero Total (CFT),  TASA de interés
// El plazo para devolverlo HASTA es iguala la cantidad de cuotas

let  Monto = 0;
let Tasa = 0.5;
let Moneda = "Pesos";
const  IVA = 21;
let cuotas = [1,3,6,12,24];
let cuotasa = []
//Cada cuota está formada por tres partes: 
// Una porción del capital a devolver.
// Intereses.
// Impuestos y gastos.

monto = parseInt(prompt("Ingrese el monto del prestamos a solicitar: ") )

const recorreCuotas = (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    let cantidadCuotas = (arr[i]);
    let pagoMes = monto / cantidadCuotas;
    rest = (pagoMes * IVA)/100;
    pagoMes = pagoMes + rest;
    cuotasa.push(`${pagoMes}`)

    }
    
  }

recorreCuotas(cuotas);

console.log(cuotasa)

/* cuotasCuotaElleccion = parseInt (prompt('Selecciones cantidad de cuotas 1 , 3, 6, 12, 18, 24: '))

while( cuotas != 1 | 3 | 6 | 12 | 18 ){

    cuotas = parseInt (prompt('Selecciones SOLO delas siguiente OPCIONES:  1 , 3, 6, 12, 18, 24: '));
    
    
} */