let i = 0;
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

function changeBackground() {
    let colors = ['grey', 'darkmagenta'];

    document.body.style.background = colors[i];
    i++;

    if (i == 2) {
        i = 0;
    }
}

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    text1.style.top = value * 0.5 + 'px';
    text2.style.top = value * 0.5 + 'px';
});

