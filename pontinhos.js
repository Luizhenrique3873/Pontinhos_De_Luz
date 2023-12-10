function ir() {
    var cpfvar = document.getElementById("cpfid").value; //quando var esta fora de function as vezes não funciona
    if (cpfvar == "41193446813"){
        window.location.href = "heitor.html";
    }
    if (cpfvar == "44741454886" || cpfvar == "44303201871"){
        window.location.href = "rhavi.html";
    }
    if (cpfvar == "05606644355"){
        window.location.href = "lucca.html";
    }
    if (cpfvar == "36021457862"){
        window.location.href = "luan.html";
    }
    else {
    document.getElementById("vai").innerHTML = "O CPF Não Foi Encontrado";
    }
}
function entrar(event){
    if(event.key === "Enter"){
        ir();
    }
}