$(document).ready(function () {
    $(".dws-form").on("click", ".tab", function () {
        $(".dws-form .tab").removeClass('active');
        $(this).addClass('active');
        $(".dws-form").find(".active").removeClass("active");
   
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");
    });
});