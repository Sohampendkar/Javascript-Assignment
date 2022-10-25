$(document).ready(function(){
    $("#buttonOnclick").click(function(){
        var textBoxValue = $("#email").val();
        $("#divEmail").html(textBoxValue);
    })
})