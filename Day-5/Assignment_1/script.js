function newData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('fileData').innerHTML = this.responseText;
        }
    };
    xhr.open('GET', "file.json", true);
    xhr.send();
    
//     data = JSON.parse(xhr);
//   console.table(data);
    
  // data = xhr.createTable(data);
    

    
}

// function createTable(data) {
//     var table = "<table border=1>";
//     // add a row for name and marks
//     table += `<tr>
//                 <th>Name</th>
//                 <th>CTID</th>
//                 <th>Location<th>
//               </tr>`;
//     // now loop through students
//     // show their name and marks
//     var tr = "";
//     for(let i = 0; i < data.result.length; i++) {
//       tr += "<tr>";
//       tr += `<td>${data.result[i].name}</td>`;
//       for (var key in data.result[i].ctid) {
//         tr += `<td>${data.result[i].location[key]}</td>`;
//       }
//       tr += "</tr>"
//     }
//     table += tr + "</table>";
    
//       // append table to body
//       document.body.innerHTML += table;
//     }
