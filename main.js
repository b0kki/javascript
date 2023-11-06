const form = document.getElementById('form-atividade')
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    // ADICIONA AS INFORMAÇÕES DE ATIVIDADE, NOTA E SE O ALUNO FOI APROVADO OU NÃO
    let linha = '<tr>';
    //cria a variável LINHA, que recebe o conteúdo da string html "<tr>"
    linha += `<td>${inputNomeAtividade.value}</td>`;
    // concatenação:   linha = linha + 'outro conteudo
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>`;
    //if positivo = ? / else = : 
    linha = '</tr>';

    // COLOCA OS DADOS NA TABELA
    const corpoTabela = document.querySelector('tbody');
    // retorna o primeiro item do CSS correspondente
    corpoTabela.innerHTML = linha;
    // insere o conteúdo dentro da tag

});