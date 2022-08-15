
type numOrString =  number | string

function somarValores(input1: numOrString , input2: numOrString ){
   if(typeof input1 === 'string' || typeof input2 === 'string'){
    return input1.toString()+ input2.toString();
   }else{
        return input1 + input2;
   }
}
console.log(somarValores(3, 5));
console.log(somarValores('ola ', 'tudo bem?'));
console.log(somarValores('3',5));
