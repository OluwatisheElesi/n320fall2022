function requestAnimationFrame(el) {
    el.style.animation = 'none';
    el.offsetHeight;
    //  trigger flow
    el.style.animation = null;
}
 