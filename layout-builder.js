'use strict';

window.onload = function() {
    const parts = ['header', 'nav', 'footer'];

    parts.map(x => fetchLayoutPart(x));
}

function fetchLayoutPart(part){
    $.get('/'+part+'.html', (response) => {
        $('.main-'+part+'').html(response);

        if(part == 'nav'){
            $('.nav-item-'+activeMenu).addClass('active')
        }
    });
}