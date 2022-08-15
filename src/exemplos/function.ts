function printaResultado(numero1:number, numero2:number):void{
    console.log(numero1 + numero2);
}

function somarValoresNumerico(numero1:number, numero2:number, callback:(numero:number)=> number):number {

    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number):number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number)
{
    return numero / numero
}


console.log(somarValoresNumerico(1,7,aoQuadrado));

console.log(somarValoresNumerico(1,7,dividirPorEleMesmo));

