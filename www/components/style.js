// BOTÕES DINAMICOS 

var sxo = 0; //0 = masc / 1 = fem

function btSexo(){
  sxo += 1; //toda vez q eu clicar mudar as informações

 if(sxo > 1)
 {
    sxo = 0;
 }

   if (sxo == 0)
  {
    document.getElementById('btnSexo1').src="../img/sexo_masc.png";
    document.getElementById('btnSexo').value="masc";
  }
  else
  {
    document.getElementById('btnSexo1').src="../img/sexo_fem.png";
    document.getElementById('btnSexo').value="fem";
  }
}

/* --- JAVASCRIPT EM JQUERY --- */

/*
$(document).on("click","#btnSexo",function(){
  sxo +=1;

  if(sxo > 1){
    sxo = 0;
  }

   if(sxo == 0){
    $("#btnSexo1").attr('src','../img/sexo_masc.png');  
    $("#btnSexo").val("masc");
  }
  else{
    $("#btnSexo1").attr('src','../img/sexo_fem.png');  
    $("#btnSexo").val("fem");
  }
});
*/
