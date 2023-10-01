function ir() {
    var cpfvar = document.getElementById("cpf").value; //quando var esta fora de function as vezes não funciona
    if (cpfvar == "41193446813"){
    window.location.href = "heitor.html";
    }
    else {
    document.getElementById("vai").innerHTML = "o cpf não foi encontrado";
    }
}
