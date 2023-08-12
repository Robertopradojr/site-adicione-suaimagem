$(document).ready(function(){

    document.querySelector('header button').addEventListener('click', function(){
    })
    $('header button').click(function(){
        $('form').slideDown();//jquery é bem mais simples os codigos.
   
    })
    $('#Cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçodaimagem = $('#foto').val();
        const novoItem = $('<li style="display:none"></li')
        $(`<img src=" ${endereçodaimagem}">`).appendTo(novoItem);
        $(`<div class ="overlay">
                <a href="${endereçodaimagem}" target="_blank"> <!--para abrir algo em outra guia-->
                    Ver imagem em tamanho real
                </a>
            
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(3000);
            $('#foto').val('')
    })
})
