jQuery(document).ready(function () {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX - 40;
        mouseY = e.pageY - 40;
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 5);
        yp += ((mouseY - yp) / 5);
        $("#circle").css({ left: xp + 'px', top: yp + 'px' });
    }, 20);

});

