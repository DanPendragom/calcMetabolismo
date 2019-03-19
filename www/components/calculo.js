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
    sexo = $("#sexo").val(this);
    atvFisica = $("#atvFisica").val(this);

    if(sexo == "masc"){
      resultado = atvFisica * (66 + ((13.7* peso) + (5* altura) - (6.8 * idade)));
    }
    else{
      resultado = atvFisica * (655 + ((9.6* peso) + (1.8* altura) - (4.7 * idade)));
    }

    $("#resposta").val("Você gasta " + resultado +" kcal p/Dia");
    
    alert("funciona");
});
