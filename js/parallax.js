// on scroll, update the position of the background image

$( document ).scroll(function() {
    var screenheight = parseInt($(document).height());
    var scrolledpx = parseInt($(document).scrollTop());     
    var sum = screenheight+scrolledpx;
    var newposition = 500 - 0.25*(sum - 4100);
    console.log($(document).scrollTop());
    console.log("scrolledpx: " + scrolledpx);
    console.log("screen: " + screenheight);
    console.log("sum=" + sum);
    console.log("new position=" + newposition);
    $("section.background1").css("background-position-y", newposition + "px");
})