$('[lang="eng"]').hide()

$('#eng-lang').click(function () {
    $('#pl-lang').removeClass('active');
    $(this).addClass("active");

    $('[lang="pl"]').hide();
    $('[lang="eng"]').show();
})

$('#pl-lang').click(function () {
    $('#eng-lang').removeClass('active');
    $(this).addClass("active");

    $('[lang="eng"]').hide();
    $('[lang="pl"]').show();
})