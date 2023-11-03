const form = document.getElementById('form-compara')


function validaNumero(numeroMaior, segundoCampo) {
    const compara = numeroMaior > segundoCampo
        return compara
}

form.addEventListener('submit', function (e) {

    let formEValido = false;

    e.preventDefault();


    const primeiroCampo = document.getElementById('numeroA');
    const segundoCampo = document.getElementById('numeroB');

    const mensagemSucesso = `O número ${numeroB.value} é maior que o número ${numeroA.value}!`;

    formEValido = (validaNumero(primeiroCampo.value) == true)
    if (formEValido) {
        alert(mensagemSucesso);

        primeiroCampo.value = " ";
        segundoCampo.value = " ";

    } else {
        alert("O número B é menor que o número A")
    }

})

console.log(form)