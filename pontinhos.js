function ir() {
    var cpfvar = document.getElementById("cpfid").value; //quando var esta fora de function as vezes não funciona
    if (cpfvar == "41193446813"){
    window.location.href = "heitor.html";
    }
    if (cpfvar == "44741454886" || cpfvar == "44303201871"){
    window.location.href = "rhavi.html";
    }
    else {
    document.getElementById("vai").innerHTML = "O CPF Não Foi Encontrado";
    }
}
