$(document).ready(function ($) {
    var abiertomenu = false;

    function abrirmenu(event) {
        if (abiertomenu) {
            $("#menu nav>ul").removeClass("abierto");
            abiertomenu = false;
        } else {
            $("#menu nav>ul").addClass("abierto");
            abiertomenu = true;
        }
    }

    function abririnfofooter(event) {
        $(this).next().slideToggle();
    }

    $("#menu h3").on("click", abrirmenu);
    $("#footer h4").on("click", abririnfofooter);

});