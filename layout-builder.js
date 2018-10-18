'use strict';

const parts = ['header', 'nav', 'footer'];
let loadedParts = 0;

window.onload = function() {
    parts.map(x => fetchLayoutPart(x));
}

function fetchLayoutPart(part){
    $.get('/'+part+'.html', (response) => {
        $('.main-'+part+'').html(response);
        loadedParts++;

        if(part == 'nav'){
            $('.nav-item-'+activeMenu).addClass('active')
        }

        if(loadedParts == parts.length){
            $('body').removeClass('loading');
        }
    });
}

function tabOutsideNav(target){
    $('.nav-item [href="'+target+'"]').trigger('click');

}