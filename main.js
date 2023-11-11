const form = document.getElementById('form-atividade')

const imgAprovado = '<img src="./imagem/aprovado.png" alt="Emoji comemorando" />';
const imgReprovado = '<img src="./imagem/reprovado.png" alt="Emoji triste" />';

//CALCULO DAS MÉDIAS
//array que contem as informações de atividade
const atividades = [];
//array que contem as informações de notas
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span/>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span/>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

//variável que vai armazenar todas linhas adicionadas e para cada linha criada adiciona nesta variável
let linhas = '';

//Impede que a página atualize ao clicar o botão de submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
    // ADICIONA AS INFORMAÇÕES DE ATIVIDADE, NOTA E SE O ALUNO FOI APROVADO OU NÃO
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    //Verifica se já existe uma atividade com o nome inserido, previnindo a adição de atividades repitidas
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {

        //push que adiciona o conteúdo
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        //cria a variável LINHA, que recebe o conteúdo da string html "<tr>"
        let linha = '<tr>';
        // concatenação: +=   linha = linha + outro conteudo
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        //if positivo = ? / else = : 
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

// COLOCA OS DADOS NA TABELA
function atualizaTabela() {
    // retorna o primeiro item do CSS correspondente
    const corpoTabela = document.querySelector('tbody');
    // insere o conteúdo dentro da tag
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    //aplica a divisão para o cálculo da média
    const mediaFinal = calculaMediaFinal();

    //.toFixed = limita o número de decimais que será visualizado na tela
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    //laço de repetição
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
