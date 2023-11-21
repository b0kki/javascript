$(document).ready(function (e) {


    $('form').on('submit', function (e) {
        e.preventDefault();

        const valorNovoItem = $('#tarefa').val();
        const novoItem = $('<li></li>')
        $(`<li>${valorNovoItem}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('#tarefa').val('')

    })


    $('ul').click("li", function () {
        $(this).css('text-decoration', 'line-through');
    });
    
});