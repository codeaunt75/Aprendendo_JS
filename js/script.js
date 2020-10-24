function valores_positivos(p_lista_num[]){

    var i;
    var saida=0;
    for(i = 0; i<p_lista_num; i++){
    let a = parseFloat(p_lista_num[i]);
    if (a >0){
        saida++;
    }
}

console.log(saida + " valores positivos");
}

function nums_pares (p_lista_num[]){
    var i;
    var saida=0;
    var v_num = parseInt(p_lista_num[i]);
    for(i = 1; i<=p_lista_num.lenght; i++){
    if ( (i%2) == 0){
    console.log(i);  
    }
}

function analise_nums (p_lista_num[]){
    var i;
    var saida=0;
    var q_par=0;
    var q_impar=0;
    var q_pos =0;
    var q_neg =0;
    for(i=0; i<p_lista_num.lenght; i++){
    var v_num = parseInt(p_lista_num[i]);
    q_pos=q_pos + ((v_num>0) ? 1 : 0);
    q_neg=q_neg + ((v_num<0) ? 1 : 0);
    q_par=q_par + ((v_num%2 ==0) ? 1:0);
    q_impar=q_impar + ((v_num%2 !=0) ? 1:0);
    
    }
    console.log( q_par + " valor(es) par(es)");
    console.log( q_impar + " valor(es) impar(es)");
    console.log( q_pos + " valor(es) positivo(s)");
    console.log( q_neg + " valor(es) negativo(s)");
}

function contagem_cedulas (p_valor) {
    var i;
    var val_notas = ["100","50","20","10","5","2","1"];
    console.log(v_valor);
    for (i=0;i<val_notas.length;i++){
        let v_sobra = parseInt(p_valor/val_notas[i])>0 ? (v_valor%val_notas[i]): v_valor;
        console.log(parseInt(p_valor/val_notas[i]) + " nota(s) de R$ " + val_notas[i] +",00");
        p_valor = v_sobra;
    }
}

function consumo_medio (p_km, p_litros){

    console.log(parseFloat(p_km)/parseFloat(p_litros).toFixed(3) + " km/l");

}