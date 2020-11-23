var ageOf = document.getElementById('age');
var dateTst = new Date();
var yearAct = dateTst.getFullYear();
var myAge = yearAct-1995;
var activeMenu = 0;

$('#age').html(myAge);

$('#showBTN').click(function () {
    $('#side_menu_responsive').css("display", "flex");
});

$('.o7').click(function () {
    $('#side_menu_responsive').css("display", "none");
});



var menuVal = 1;
$('.o1').click(function () {
    $( ".i1" ).css("display", "block");
    $( ".i2" ).css("display", "none");
    $( ".i3" ).css("display", "none");
    $( ".i4" ).css("display", "none");
    $( ".i5" ).css("display", "none");
    $( ".i6" ).css("display", "none");
    $( ".o1" ).css("color", "white").css("font-weight", "bold");
    $( ".o2" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o3" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o4" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o5" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o6" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    menuVal=1;
});

$('.o2').click(function () {
    $( ".i1" ).css("display", "none");
    $( ".i2" ).css("display", "block");
    $( ".i3" ).css("display", "none");
    $( ".i4" ).css("display", "none");
    $( ".i5" ).css("display", "none");
    $( ".i6" ).css("display", "none");
    $( ".o1" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o2" ).css("color", "white").css("font-weight", "bold");
    $( ".o3" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o4" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o5" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o6" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    menuVal=2;
});

$('.o3').click(function () {
    $( ".i1" ).css("display", "none");
    $( ".i2" ).css("display", "none");
    $( ".i3" ).css("display", "block");
    $( ".i4" ).css("display", "none");
    $( ".i5" ).css("display", "none");
    $( ".i6" ).css("display", "none");
    $( ".o1" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o2" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o3" ).css("color", "white").css("font-weight", "bold");
    $( ".o4" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o5" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o6" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    menuVal=3;
});

$('.o4').click(function () {
    $( ".i1" ).css("display", "none");
    $( ".i2" ).css("display", "none");
    $( ".i3" ).css("display", "none");
    $( ".i4" ).css("display", "block");
    $( ".i5" ).css("display", "none");
    $( ".i6" ).css("display", "none");
    $( ".o1" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o2" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o3" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o4" ).css("color", "white").css("font-weight", "bold");
    $( ".o5" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o6" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    menuVal=4;
});

$('.o5').click(function () {
    $( ".i1" ).css("display", "none");
    $( ".i2" ).css("display", "none");
    $( ".i3" ).css("display", "none");
    $( ".i4" ).css("display", "none");
    $( ".i5" ).css("display", "block");
    $( ".i6" ).css("display", "none");
    $( ".o1" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o2" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o3" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o4" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o5" ).css("color", "white").css("font-weight", "bold");
    $( ".o6" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    menuVal=5;
});

$('.o6').click(function () {
    $( ".i1" ).css("display", "none");
    $( ".i2" ).css("display", "none");
    $( ".i3" ).css("display", "none");
    $( ".i4" ).css("display", "none");
    $( ".i5" ).css("display", "none");
    $( ".i6" ).css("display", "block");
    $( ".o1" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o2" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o3" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o4" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o5" ).css("color", "rgba(255, 255, 255, 0.27)").css("font-weight", "normal");
    $( ".o6" ).css("color", "white").css("font-weight", "bold");
    menuVal=6;
});

$('.o1').mouseenter(function () {
    $('.o1').css("color", "white").css("transition-duration", "0.6s");
});

$('.o1').mouseleave(function () {
    if (menuVal!=1){
        $('.o1').css("color", "rgba(255, 255, 255, 0.27)").css("transition-duration", "0.6s");
    }
});

$('.o2').mouseenter(function () {
    $('.o2').css("color", "white").css("transition-duration", "0.6s");
});

$('.o2').mouseleave(function () {
    if (menuVal!=2){
        $('.o2').css("color", "rgba(255, 255, 255, 0.27)").css("transition-duration", "0.6s");
    }
});

$('.o3').mouseenter(function () {
    $('.o3').css("color", "white").css("transition-duration", "0.6s");
});

$('.o3').mouseleave(function () {
    if (menuVal!=3){
        $('.o3').css("color", "rgba(255, 255, 255, 0.27)").css("transition-duration", "0.6s");
    }
});

$('.o4').mouseenter(function () {
    $('.o4').css("color", "white").css("transition-duration", "0.6s");
});

$('.o4').mouseleave(function () {
    if (menuVal!=4){
        $('.o4').css("color", "rgba(255, 255, 255, 0.27)").css("transition-duration", "0.6s");
    }
});

$('.o5').mouseenter(function () {
    $('.o5').css("color", "white").css("transition-duration", "0.6s");
});

$('.o5').mouseleave(function () {
    if (menuVal!=5){
        $('.o5').css("color", "rgba(255, 255, 255, 0.27)").css("transition-duration", "0.6s");
    }
});

$('.o6').mouseenter(function () {
    $('.o6').css("color", "white").css("transition-duration", "0.6s");
});

$('.o6').mouseleave(function () {
    if (menuVal!=6){
        $('.o6').css("color", "rgba(255, 255, 255, 0.27)").css("transition-duration", "0.6s");
    }
});