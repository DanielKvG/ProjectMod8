var container = document.querySelector('.fullscreen');
var btn = document.getElementById('FullScreen');

btn.onclick = function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
    container.classList.remove("active");
};

setTimeout( () => {
    container.classList.add("active");
}, 2000);