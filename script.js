let i = 0;

function changeBackground() {
    let colors = ['grey', 'darkmagenta'];

    document.body.style.background = colors[i];
    i++;

    if (i == 2) {
        i = 0;
    }
}

