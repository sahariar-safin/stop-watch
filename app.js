const display = document.getElementById('timer');
const displayMs = document.getElementById('ms');
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let st;
const start = () => {
    if (!st) {
        st = setInterval(timer, 10);
    }
}
const stop = () => {
    clearInterval(st)
    st = false;
}
const reset = () => {
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    display.innerHTML = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    stop();
}
const timer = () => {
    display.innerHTML = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    ms++;
    if (ms == 99) {
        ms = 0;
        s++;
    }
    if (s == 59) {
        s = 0;
        m++;
    }
    if (m == 59) {
        m = 0;
        h++;
    }
}