//executa após tudo ser carregado
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        //transforma de string para inteiro
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})