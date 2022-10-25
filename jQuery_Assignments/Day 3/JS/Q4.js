$(document).ready(function(){
    $.ajax({
     url: "https://jsonplaceholder.typicode.com/todos",
     type: "POST",
     dataType: "json",
     data:{
         userId: $("#userid").val(),
         title:$("#title").val(),
         completed: $("#completed").is(':checked')
     },
     success: function(data){
         console.log(data);
         var result = `<b> User Added Successfully </b><br><br>
         The Details are: <br>
         Id: ${data.id}<br>
         userId: ${data.userId}<br>
         Title: ${data.title}<br>
         completed: ${data.completed}<br>`
 
         $("#details").html(result)
         $('.container').css('display','block')
     }
    })
 })