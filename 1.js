$(function () {
    vitricuaedu = $('#khoiedu').offset().top;
    console.log(vitricuaedu);
    $(".xuong,.kn").click(function () {
        $('body,html').animate({ scrollTop: vitricuaedu }, 600)
    })
})
