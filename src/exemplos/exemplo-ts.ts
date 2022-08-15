let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
 
function somarNumero(numero1: number, numero2: number, devPrint: boolean, frase: string) {
   let resultado = numero1 + numero2
    if(devPrint) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devPrint = true;

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            somarNumero(Number(input1.value), Number(input2.value), devPrint, "O resultado é ");
        }
    })
}
