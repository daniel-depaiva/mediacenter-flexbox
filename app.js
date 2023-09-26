window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector(".menu .navbar-menu ul").style.display == 'flex') {
            document.querySelector(".menu .navbar-menu ul").style.display = 'none';
        } else {
            document.querySelector(".menu .navbar-menu ul").style.display = 'flex';
        }
    });
};
