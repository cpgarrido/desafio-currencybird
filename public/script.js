function send_money(){
    document.getElementById('digite').disabled = false;
    document.getElementById('digite').value= "";
    document.getElementById('digite2').disabled = true;
    document.getElementById('digite2').value= "";
}
function receive_money(){
    document.getElementById('digite2').disabled = false;
    document.getElementById('digite').value= "";
    document.getElementById('digite').disabled = true;
    document.getElementById('digite2').value= "";
}
function select_country() {
    if (document.getElementById('digite2').disabled== false){
        dig2 = document.getElementById('digite2').value
    }
    dig_peso = document.getElementById('digite').value
    var new_dig = 0;
    country=document.buscar.lista.options[document.buscar.lista.selectedIndex].value;
    console.log(country);
    if ((country == "pen"))
    {
        var spread = 0.015;
        var margen = 0.03;
        var change_dolar = 0.28;
    }
    else if ((country == "cop"))
    {
        var spread = 0.018;
        var margen = 0.035;
        var change_dolar = 0.00027;
    }
    else if ((country == "brl"))
    {
        var spread = 0.012;
        var margen = 0.029;
        var change_dolar = 0.19;  
    }
    if (dig_peso > 0){
        new_dig = dig_peso/(1+margen);
        var dig_dolar = (new_dig/(1.004))/757;
        console.log(dig_dolar);
        dig_dolar = dig_dolar/(1+spread);
        new_dig = dig_dolar/change_dolar;
        document.getElementById('digite2').value = Math.round(new_dig, -1);
    }
    else if (dig2 > 0){
        new_dig = dig2*change_dolar;
        new_dig = new_dig*(1+spread);
        new_dig = new_dig*757*1.004;
        new_dig = new_dig*(1+margen);
        document.getElementById('digite').value = Math.round(new_dig, -1);
    }
    }