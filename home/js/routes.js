function main(){
    loadURL()

    $('.mdl-layout__tab').click(function(){
        res = this.id.split(['-'])[0]
        document.location.hash = res
    })
}

function loadURL(){
    var route = window.location.href.split('#')
    if (route.length > 1){
        dest = route[1]
        $('.is-active').removeClass('is-active')
        $('#' + dest).addClass('is-active')
        $('#' + dest + '-tab').addClass('is-active')
    } else {
        $('.is-active').removeClass('is-active')
        $('#About').addClass('is-active')
        $('#About-tab').addClass('is-active')
    }
}

window.onpopstate = function(){
    loadURL()
}

$(document).ready(main)