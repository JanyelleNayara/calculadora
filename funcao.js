function Calcular (){
    var valorElementoUm = document.getElementById("notaUm");
    var valor1 = valorElementoUm.value;
    var notaUm = parseFloat(valor1);

    var valorElementoDois = document.getElementById("notaDois");
    var valor2 = valorElementoDois.value;
    var notaDois = parseFloat(valor2);
    
    var valorElementoTres = document.getElementById("notaTres");
    var valor3 = valorElementoTres.value;
    var notaTres = parseFloat(valor3);

    var valorElementoQuatro = document.getElementById("notaQuatro");
    var valor4 = valorElementoQuatro.value;
    var notaQuatro = parseFloat(valor4);
    
    var soma = notaUm + notaDois + notaTres + notaQuatro;
    var media = soma/4;

    var elementoMedia = document.getElementById("calcular");
    var calcular = "A média de suas notas é: " + media;
    elementoMedia.innerHTML = calcular;
}

function fun(){
        document.getElementById('notaUm').value='';
        document.getElementById('notaDois').value='';
        document.getElementById('notaTres').value='';
        document.getElementById('notaQuatro').value='';
}
