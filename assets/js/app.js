(function(){
    $('#hamburger').click(function(){
        $('.navswipe').css({
            transform: 'translate(0px, 0px)'
        })
        $('.ssm-overlay').addClass('active');
    })

    $('.ssm-overlay, .modal-close').click(function(){
        $('.md-modal, .ssm-overlay').removeClass('md-show').removeClass('active');
        $('.navswipe').attr('style', '')
    });
    
    $('#regByEmailRadio, #regByPhoneRadio').change(function(){
        if($('#regByEmailRadio').is(':checked')){
            $('#inputEmail').show();
            $('#inputPhone').hide();
        }else{
            $('#inputEmail').hide();
            $('#inputPhone').show();
        }
    })

    $('.show-password').click(function(){
        $('#joinform-password').attr('type') == 'text' ? $('#joinform-password').attr('type', 'password') : $('#joinform-password').attr('type', 'text')
    })

    $('[tab-nav]').click(function(e){
        e.preventDefault();

        let $parent = $(this).parents('.tabs-wrapper');
        let $curTab = $($(this).attr('href'));

        $parent.find('.tab-content').removeClass('active');
        $curTab.addClass('active');
        
        if(!$(this)[0].hasAttribute('keep-li-active')){
            $parent.find('.li-down-tabs').removeClass('current');
            $(this).parent().addClass('current');
        }
    })
})($);

function CloseLeftNav(){
    $('.navswipe').attr('style', '')
}

function openModal(sel){
    $('.md-modal, .ssm-overlay').removeClass('md-show').removeClass('active');
    $('.navswipe').attr('style', '')
    $(sel).addClass('md-show');
}