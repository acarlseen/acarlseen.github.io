addEventListener('DOMContentLoaded', () => {
   document.getElementsByTagName('nav')[0].innerHTML = '\
    <div class="navbar main-bar">\
        <div class="brand-burger">\
            <div class="navbar brand">\
                <a class="brand" href="/">Alex Carlseen</a>\
            </div>\
            <div class="burger">\
                <a href="javascript:void(0)" onClick="menuToggle()"><i class="fa-solid fa-bars" style="color: #fafafa;"></i></a>\
            </div>\
            <div class="close-menu">\
                <a href="javascript:void(0)" onClick="menuToggle()">&times;</a>\
            </div>\
        </div>\
            <div class="navbar menu" id="drop-menu">\
                    <ul class="nav-list">\
                        <li class="navbar menu-item">\
                            <a class="menu-item" href="/">About Me</a>\
                        </li>\
                        <li class="navbar menu-item">\
                            <a class="menu-item" href="/contact.html">Contact</a>\
                        </li>\
                    </ul>\
                </div>\
    </div>\
        <div class="spacer"></div>'
})

function menuToggle(){
    var x = document.getElementById('drop-menu')
    var y = document.getElementsByClassName('burger')[0]
    var z = document.getElementsByClassName('close-menu')[0]
    if (x.style.display == 'flex'){
        x.style.display = 'none';
        y.style.display = 'flex'
        z.style.display = 'none'
    }
    else {
        x.style.display = 'flex';
        y.style.display = 'none'
        z.style.display = 'flex'
    }
}