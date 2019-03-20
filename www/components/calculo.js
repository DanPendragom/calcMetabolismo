var altura = 0;
var peso = 0;
var idade = 0;
var sexo = 0;
var atvFisica = 0;
var resultado = 0;

$(document).on("click","#btnResultado",function(){
    altura = $("#altura").val();
    peso = $("#kg").val(); 
    idade = $("#idade").val();
    sexo = $("#btnSexo").val();
    atvFisica = $("#atvFisica").val();

    if(sexo == "masc"){  
      resultado = atvFisica * (66 + ((13.7* peso) + (5* altura) - (6.8 * idade)));
    }
    else{
      resultado = atvFisica * (655 + ((9.6* peso) + (1.8* altura) - (4.7 * idade)));
    }
    
    $("#resposta").val(resultado.toFixed(0));
    $("#detalhes").val("kcal/Dia");
    $("#titulo").val("VOCÊ");
    $("#titulo2").val("GASTA:");
    
});
