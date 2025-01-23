let resultado:number=0;
let resultadoE= document.getElementById("resultado") as HTMLDivElement;


function resta():number|string{
    let val1: number = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    let val2: number = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    resultado=val1-val2
    return resultadoE.innerText= "Resultado: " + resultado;
}

const division=():number|string=>{
    let val1: number = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    let val2: number = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    if(val2==0)
        return resultadoE.innerText="Error matematico";
    else{
        resultado=val1/val2;
        return resultadoE.innerText= "Resultado: " + resultado;
    }
}
function suma():number|string{
    let val1: number = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    let val2: number = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    resultado=val1+val2;
    return resultadoE.innerText= "Resultado: " + resultado;
}
function multi():number|string{
    let val1: number = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    let val2: number = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    resultado=val1*val2;
    return resultadoE.innerText= "Resultado: " + resultado;
}
