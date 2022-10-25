$(() => {
    $("#applyStyleButton").click(function(){
        $('textarea').css('border', '2px solid red')
    })

    $("#applyDivStyleButton").click(function(){
        $("#div1").html("<h1>This is Div 1<h1>")
    })

    $('#sayHelloButton').click(function(){
        $("input").val("Hello");
        $('textarea').val("Hello");
    })
})