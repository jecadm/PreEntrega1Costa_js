//El monto de la CUOTA Es un gasto fijo.
// Costo Financiero Total (CFT),  TASA de interés
// El plazo para devolverlo HASTA es iguala la cantidad de cuotas

let  Monto = 0;
let tasa = 5;
let Moneda = "Pesos";
const  IVA = 21;
let cuotas = [1,3,6,12,24];
let cuotasa = []
let cuotaSinIva = []
let cuotasFinal = []
let cuotasSelec = 0;
let totalC = []
//Cada cuota está formada por tres partes: 
// Una porción del capital a devolver.
// Intereses.
// Impuestos.


// SOLICITA MONTO PARA COTIZAR
monto = parseInt(prompt("Ingrese el monto del prestamos a solicitar: ") )

while(true){
    let num = monto;
/*
!isNaN(num) = si es diferente de un string osea true
hasta que sea insertado un numero terminará el ciclo o hasta que se escriba fin
*/
    if(!isNaN(num) && num != null && num != ""){
        alert(`Exlenete monto, va a solicitar contizacion por $${num}`);
      break;
    }else {
        monto = parseInt(prompt("Solo puede Ingresar un Numeros: ") )
      continue;
    }
}





//  RECORRE EL ARRAY DE TIPOS DE CUOTAS , DIVIDE EL MONTO POR LA CUOTAS Y LES AGREGA EL IVA MAS EL TASA
const recorreCuotas = (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    let cantidadCuotas = (arr[i]);
    let pagoMes = monto / cantidadCuotas;
    rest = (pagoMes * tasa)/100;
    pagoMes = pagoMes + rest ;
    cuotasa.push(`En ${(arr[i])} Cuotas = $${pagoMes} +IVA
    `)
    cuotaSinIva.push(pagoMes)

    }
    
  }

  //LLAMAOS AL FOR Y LE PASAMOS EL PARAMETRO DE CUOTAS
recorreCuotas(cuotas);

//MOSTRAMOS PARA VALIDACION BORRAR LUEGO
console.log(cuotaSinIva)

console.log(cuotasa)
//MOSTRAMOS PARA VALIDACION BORRAR LUEGO

//PARA SUMARLE EL IVA A LAS CUOTAS

const recorreCuotasIva= (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    let pagoxMes = (arr[i]);
    restFinal = (pagoxMes * IVA)/100;
    pagoxMes = pagoxMes + restFinal ;
    cuotasFinal.push(pagoxMes)

    }
    
  }
//PARA SUMARLE EL IVA A LAS CUOTAS

//LLAMAMOS PARA SUMARLE EL IVA A LAS CUOTAS
recorreCuotasIva(cuotaSinIva)


//MOSTRAMOS PARA VALIDACION BORRAR LUEGO
console.log(cuotasFinal)
//MOSTRAMOS PARA VALIDACION BORRAR LUEGO

//SELECCION DE CANTIDAD DE CUOTAS
cuotasSelec = Number (prompt(`Selecciones cantidad de cuotas ${cuotasa}: `))

while(true){
    let num = cuotasSelec;
/*
!isNaN(num) = si es diferente de un string osea true
hasta que sea insertado un numero terminará el ciclo o hasta que se escriba fin
*/
    if(!isNaN(num) && num != null && num != ""){
        alert(`Exlenete, va a solicitar contizacion por ${num} Cuotas`);
      break;
    }else {
        cuotasSelec= parseInt(prompt(`Selecciones cantidad de cuotas ${cuotasa}: `) )
      continue;
    }
}



 let cuotasSuma = 0;



console.log(cuotasFinal[1])

//SWITCH PARA PRESENTATAR LOS RESULTADOS DEPENDIENDO DE LAS CUOTAS SELECCIONADAD. 

  switch(cuotasSelec){

    //podria haber usado en los multiplicaodres la variable cuotaSelec pero me gusto asi.

    case 1: 
        alert(`Vas a pagar un total de ${cuotasFinal[0] * 1} en ${cuotasSelec} Cuotas de ${cuotasFinal[0]} Final `)
        break;
    case 3:
        alert(`Vas a pagar un total de ${cuotasFinal[1] * 3} en ${cuotasSelec} Cuotas de ${cuotasFinal[1]} Final`)
        break;
    case 6: 
        alert(`Vas a pagar un total de ${cuotasFinal[2] * 6} en ${cuotasSelec} Cuotas de ${cuotasFinal[2]} Final`)
        break;
    case 12: 
        alert(`Vas a pagar un total de ${cuotasFinal[3] * 12} en ${cuotasSelec} Cuotas de ${cuotasFinal[3]} Final`)
        break;
    case 24: 
        alert(`Vas a pagar un total de ${cuotasFinal[4] * 24} en ${cuotasSelec} Cuotas de ${cuotasFinal[4]} Final`)
        break; 
    default:
        cuotasSelec = alert('Selecciones SOLO delas siguiente OPCIONES:  1 , 3, 6, 12, 24:  VULEVA a iniviar el proceso');
        break;

  }
    
