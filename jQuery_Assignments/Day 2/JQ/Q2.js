$(document).ready(function(){
    // $( "#jsContsainer" ).dialog({  
    //     autoOpen: false,})
    $("#btn").on('click', function(){
        $("#jscontainer").css('display','block');
        $('#jsContainer').dialog();
    })

    $("#idoButton").on('click', function(){
        $('jsContainer').css('display','none');

    })
})