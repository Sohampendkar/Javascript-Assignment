// Fade In Function
$('#fadingButton').on('click', function(){
    $('#fadingText').fadeIn();
})

// Slide In Function
$('#slideInButton').click(function(){
    $('#slideInText').slideDown();
})

//Toggle Fade in and Out
$('#toggleFadeButton').on('click', function(){
    $('#toggleFadeText').fadeToggle();
})