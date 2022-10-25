$('#container').accordion({event: "mouseover"});
$('#container').css({"background-color": "rgb(168, 168, 124)", "padding": "8px"})
$('p').css({"background-color": "black", "color": "white"})
$('h2').css({"background-color":" grey", "color":"black"})

$('h2').on('mouseover', function(){
    $(this).css({"background-color": "black", "color": "white"})
})
