$(document).ready(function (e) {


    $('form').on('submit', function (e) {
        e.preventDefault();

        const valorNovoItem = $('#tarefa').val();
        const novoItem = $('<li></li>')
        $(`<li>${valorNovoItem}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('#tarefa').val('')

    })

    //quando o cliente clicar na linha da lista
    $('ul').on("click", "li", function () {
        //pega a linha (representado pelo this) e coloca um css
        $(this).css('text-decoration', 'line-through');
    });

});