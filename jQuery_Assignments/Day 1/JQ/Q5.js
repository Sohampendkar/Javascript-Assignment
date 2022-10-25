$(document).ready(function(){
    $('#loginButton').attr("disabled", 'true')
    let textBoxValue = $("textBox").val();
    let lengthBox = textBoxValue.length;
    if(lengthBox > 0){
        $('#loginButton').attr("disabled", "false")
    }
})
