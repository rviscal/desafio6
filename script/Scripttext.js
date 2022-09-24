function somentLetras(input) {
    var regNumero = /[^a-z]/gi;
    input.value = input.value.replace(regNumero, "");

}