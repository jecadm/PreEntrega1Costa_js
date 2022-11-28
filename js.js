//El monto de la CUOTA Es un gasto fijo.
// Costo Financiero Total (CFT),  TASA de interés
// El plazo para devolverlo HASTA es iguala la cantidad de cuotas

let  Monto = 0;
let tasa = 5;
let Moneda = "Pesos";
const  IVA = 21;
let cuotas = [1,3,6,12,24];
let cuotasa = []
//Cada cuota está formada por tres partes: 
// Una porción del capital a devolver.
// Intereses.
// Impuestos y gastos.


// SOLICITA MONTO PARA COTIZAR
monto = parseInt(prompt("Ingrese el monto del prestamos a solicitar: ") )


//  RECORRE EL ARRAY DE TIPOS DE CUOTAS , DIVIDE EL MONTO POR LA CUOTAS Y LES AGREGA EL IVA MAS EL TASA
const recorreCuotas = (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    let cantidadCuotas = (arr[i]);
    let pagoMes = monto / cantidadCuotas;
    rest = (pagoMes * tasa)/100;
    pagoMes = pagoMes + rest ;
    cuotasa.push(`En ${(arr[i])} Cuotas = $${pagoMes} +IVA`)

    }
    
  }

recorreCuotas(cuotas);

const recorreCuotasIva= (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    let cantidadCuotas = (arr[i]);
    let pagoMes = monto / cantidadCuotas;
    rest = (pagoMes * IVA)/100;
    pagoMes = pagoMes + rest ;
    cuotasaint.push(pagoMesIva)

    }
    
  }




cuotasCuotaElleccion = Number (prompt(`Selecciones cantidad de cuotas ${cuotasa} `))



while( cuotasCuotaElleccion =!  1 ){

    cuotasCuotaElleccion = Number (prompt('Selecciones SOLO delas siguiente OPCIONES:  1 , 3, 6, 12, 24: '));
  } 
/* switch(FOOD){

    case `hamburger`: 
        console.log(`Vas a cenar  ${FOOD}`)
        break;
    case "pizza":
            console.log(`Vas a cenar  ${FOOD}`)
        break;
    case "potato": 
        console.log(`Vas a cenar  ${FOOD}`)
        break;
    case "lomo": 
        console.log(`Vas a cenar  ${FOOD}`)
        break;
    default:
        console.log(`Vas a cenar nada`)
        break;

   
    
  */