$(document).ready(function(){
    $.ajax({
       url : 'https://jsonplaceholder.typicode.com/todos',
       type: "GET",
       dataType: "json",
       success: function(data){
           var initialOption = `<option value = "" selected disabled> expand to view data </option>`
           var resultOfCompleted = ``
           var resultOfNotCompleted = ``
   
           data.forEach(data => {
               if(data.completed == true){
                   resultOfCompleted += `<option>${data.title}</option>`
               }
               else {
                   resultOfNotCompleted += `<li> ${data.title} </li>`
               }
           })
           $("#completed").html(initialOption + resultOfCompleted)
           $("#notCompleted").html(resultOfNotCompleted)
       }
    })
   })