$(document).ready(function(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      type: "GET",
      dataType: "json",
      success: function(data){
          var initialization = `<option value = " " selected disabled> expand to view data </option>`
          var result = ``
          data.forEach(data => {
              result += `<option> ${data.title} </option>`
          })
          $("#todo").html(initialization + result)
      }
    })
  })