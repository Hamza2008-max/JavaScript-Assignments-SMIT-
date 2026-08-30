var cards = document.getElementsByClassName('card');
var messageEl = document.getElementById('message');
var resetBtn = document.getElementById('resetBtn');
var cardsContainer = document.getElementById('cards');

var values = [];
for (var i = 0; i < cards.length; i++) {
    values[i] = null;
}

function rand() {
    return Math.floor(Math.random() * 6) + 1;
}

function revealCard(i) {
    var val = rand();
    values[i] = val;
    var span = cards[i].getElementsByClassName('value')[0];
    span.innerText = val;
    // set data attribute so CSS can show corner values
    cards[i].setAttribute('data-val', val);
    if (cards[i].className.indexOf('revealed') === -1) {
        cards[i].className = cards[i].className + ' revealed';
    }
}

function checkWin() {
    var counts = {};
    for (var i = 0; i < values.length; i++) {
        var v = values[i];
        if (v == null) continue;
        if (!counts[v]) counts[v] = 0;
        counts[v] = counts[v] + 1;
        if (counts[v] >= 3) {
            showWin(v);
            return true;
        }
    }
    return false;
}

function showWin(number) {
    messageEl.innerText = 'Congratulations! You won';
    for (var i = 0; i < values.length; i++) {
        if (values[i] == number) {
            if (cards[i].className.indexOf('win') === -1) {
                cards[i].className = cards[i].className + ' win';
            }
        }
    }
    if (cardsContainer.className.indexOf('disabled') === -1) {
        cardsContainer.className = cardsContainer.className + ' disabled';
    }
    // show confetti celebration
    createConfetti();
}

for (var i = 0; i < cards.length; i++) {
    (function (i) {
        cards[i].addEventListener('click', function () {
            if (cardsContainer.className.indexOf('disabled') !== -1) return;
            revealCard(i);
            checkWin();
        });
    })(i);
}

resetBtn.addEventListener('click', function () {
    location.reload();
});

function createConfetti() {
    var colors = ['#ff4757','#ffb86b','#ffd166','#7bed9f','#7ec8ff','#c291ff'];
    var count = 40;
    for (var i = 0; i < count; i++) {
        var el = document.createElement('div');
        el.className = 'confetti';
        var w = Math.floor(Math.random() * 12) + 6;
        el.style.width = w + 'px';
        el.style.height = (w * 1.4) + 'px';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        // random horizontal start
        var left = Math.floor(Math.random() * 100);
        el.style.left = left + 'vw';
        // random translateX distance
        var tx = (Math.floor(Math.random() * 200) - 100) + 'px';
        el.style.setProperty('--tx', tx);
        // random delay
        el.style.animationDelay = (Math.random() * 600) + 'ms';
        document.body.appendChild(el);
        // remove after animation
        (function(el){
            setTimeout(function(){ if (el && el.parentNode) el.parentNode.removeChild(el); }, 2600);
        })(el);
    }
}

