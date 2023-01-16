function med1(){
    if (media1.v1.value.length == 0){
        alert("Espaço em branco, digite um valor, por favor.")
        media1.v1.focus()
    } else if (media1.v2.value.length == 0) {
        alert("Espaço em branco, digite um valor, por favor.")
        media1.v2.focus()
    } else {
        var num1 = Number(media1.v1.value);
        var num2 = Number(media1.v2.value);

        var media = (num1 + num2) / 2

        media1.M.value = media;
    }
    return false;
}
function med2(){
    if (media2.v1.value.length == 0){
        alert("Espaço em branco, digite um valor, por favor.")
        media2.v1.focus()
    } else if (media2.v2.value.length == 0) {
        alert("Espaço em branco, digite um valor, por favor.")
        media2.v2.focus()
    } else {
        var num1 = Number(media2.v1.value);
        var num2 = Number(media2.v2.value);

        var calc = (num1 + num2) / 2

        media2.M2.value = calc;
    }
    return false;
}
function finalmed (){
    val1 = Number(media1.M.value);
    val2 = Number(media2.M2.value);

    boss = (val1 + (2 * val2)) / 3

    //Limitando o numero de casas decimais
    calc = boss.toFixed(1)

    if (boss >= 6){
        final.situacao.value = "APROVADO!";
    } else {
        final.situacao.value = "REPROVADO!";
    }

    final.medfinal.value = calc


    return false;
}
function calcrec() {
    if (rec.nt2.value.length == 0){
        alert("Espaço em branco, digite um valor, por favor.")
        rec.nt2.focus()
    } else if (rec.ntrec.value.length == 0) {
        alert("Espaço em branco, digite um valor, por favor.")
        rec.ntrec.focus()
    } else {
        g = Number(rec.nt2.value);
        mvr = Number(rec.ntrec.value);

        gf = (g + (1.5 *  mvr)) /  2.5
       
        rec.graufinal.value = gf
    }
    return false;
}