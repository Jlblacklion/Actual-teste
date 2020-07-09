var opt_1 =      new  Array ( "-" , "Porto Alegre", "Curitiba" );
var opt_2  = new  Array ( "-", "São Paulo", "Rio de Janeiro", "Belo Horizonte" );
var opt_3 = new  Array ( "-", "Salvador", "Recife");
var opt_4 = "Indisponivel";
var opt_5 = "Brasília";

window.onload = function mudancaValor(){
    var mudanca;
    mudanca = document.step_2.mudanca[document.step_2.mudanca.selectedIndex].value

    if (mudanca != 0 ){
        opt_Cidades = eval("opt_" + mudanca);
        num_opt = opt_Cidades.length;

        document.step_2.unidade.length = num_opt;

        for(i = 0; i < num_opt; i++){
            document.step_2.unidade.options[i].value = opt_Cidades[i];
            document.step_2.unidade.options[i].text = opt_Cidades[i];
        }
    }else{
        document.step_2.unidade.length = 1;
        
        document.step_2.unidade.options[0].value="-";
        document.step_2.unidade.options[0].text="-";
    }
    document.step_2.unidade.options[0].selected = true;
}


