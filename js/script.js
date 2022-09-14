var resultado = document.querySelector("#resultado")



function calcular(valor){
   // alert(`voce digitou ${valor}`) // é a crase!
    resultado.value += valor

    switch (resultado.value[0]){
        case '*':
            resultado.value = ''
        case '/':
            resultado.value = ''
        case '.':
            resultado.value = ''
    }
}
function limpar (){
    resultado.value = ''
}

function apagar(){
    resultado.value = resultado.value.substring(0,
                    (resultado.value.length -1))

}

function resultadofinal(){
    resultado.value = eval(resultado.value)

}