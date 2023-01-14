//alert('Olá mundo!')

           
function calcularImc() {
    //alert('ok');

    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    //console.log(altura);
    //console.log(peso);

    if(altura != '' && peso != ''){

        var imc = peso / (altura * altura);
        console.log(imc);

        //var resultado = document.getElementsByClassName('resultado-imc');
        var resultado = document.getElementById('resultado');
        var valorImc = document.getElementById('valorImc');

        //console.log(resultado);
        resultado.style.visibility = 'visible'; //exibe a div
        valorImc.innerHTML = imc.toFixed(1); //inserindo um conteúdo no html

        if(imc<18.5 || imc >=30){
            resultado.style.backgroundColor = 'red';
        }else if(imc>=18.5 && imc <=24.9){
            resultado.style.backgroundColor = 'green';
        }else if(imc >= 25 && imc<=29.9){
            resultado.style.backgroundColor = 'orange';
        }


    }else{
        alert('Preencha os campos!');
    }

}


    