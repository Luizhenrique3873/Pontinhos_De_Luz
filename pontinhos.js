function ir() {
    var cpfvar = document.getElementById("cpfid").value; //quando var esta fora de function as vezes não funciona
    if (cpfvar == "41193446813"){
    window.location.href = "heitor.html";
    }
    else {
    document.getElementById("vai").innerHTML = "o cpf não foi encontrado";
    }
}
var cpfInput = document.getElementById('cpfid');

    cpfInput.addEventListener('input', function (e) {
        var inputValue = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        var formattedValue = formatCPF(inputValue);
        e.target.value = formattedValue;
    });

    function formatCPF(value) {
        if (value.length <= 3) {
            return value;
        } else if (value.length <= 6) {
            return value.substring(0, 3) + '.' + value.substring(3);
        } else if (value.length <= 9) {
            return value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6);
        } else {
            return value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6, 9) + '-' + value.substring(9);
        }
    }
