let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resultado = document.getElementById ('resultado')
let botao = document.getElementById('botao');

let classificacao = "";

botao.onclick =() => {let imc = number(peso.value) / number (altura.value*altura.value)
if (imc<18.5){
    classificacao = "baixo peso"
}else if ((imc>18.5) && (imc<=24.9)){
    classificacao = "peso normal"
}else if ((imc>25) && (imc<=29.9)){
    classificacao = "sobrepeso"
}else if ((imc>30) && (imc<=34.9)){
    classificacao = "obesidade 1"
}else if ((imc>35) && (imc<=39.9)){
    classificacao = "obesidade 2"
}else {
    classificacao = "obesidade 3"
}
resultado.innerText = 'seu imc e: ${imc} \n classsificacao: ${classificacao}'

}
