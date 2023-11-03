const form = document.getElementById('form-compara')


function validaNumero(numeroMaior, segundoCampo) {
    // converter uma string para float:
    const compara = parseFloat(numeroMaior) < parseFloat(segundoCampo)
        return compara;
}

form.addEventListener('submit', function (e) {

    let formEValido = false;

    e.preventDefault();


    const primeiroCampo = document.getElementById('numeroA');
    const segundoCampo = document.getElementById('numeroB');

    const mensagemSucesso = `O número ${primeiroCampo.value} é maior que o número ${segundoCampo.value}!`;

    formEValido = validaNumero(primeiroCampo.value, segundoCampo.value)
    if (formEValido) {
        alert(mensagemSucesso);

        primeiroCampo.value = " ";
        segundoCampo.value = " ";

    } else {
        alert("O número B é menor que o número A")
    }

})

console.log(form)