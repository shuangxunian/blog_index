function backTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function bodyScroll() {
    var s = document.body.scrollTop;
    var t = document.getElementById('back');
    if (s >= 100) {
        t.classList.remove('hide');
    } else {
        t.classList.add('hide');
    }
}