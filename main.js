const form = document.getElementById('form-compara')


function validaNumero(primeiroCampo, segundoCampo) {
    const compara = primeiroCampo > segundoCampo
        return compara
}

form.addEventListener('submit', function (e) {

    let formEValido = false;

    e.preventDefault();


    const primeiroCampo = document.getElementById('numero-a');
    const segundoCampo = document.getElementById('numero-b');

    const mensagemSucesso = `O ${numero-b.value} é maior que o ${numero-a.value}!`;

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