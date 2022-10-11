// function enter(){
//     let x = document.getElementById('txtbox').value;
//     let link = 'https://jsonplaceholder.typicode.com/users'
//     let flink = link + x;

//     fetch(flink).then((response) => {
//     return response.json();
// }).then((json) => {
//     for (const key in json) {
//         document.writeln(`${json[key].id}--${json[key].name} </br>`)

//     }
// })
//     .catch(error => {
//         console.log(error);
//     })
// }

//Got Output in this

function enter(){
    let x = document.getElementById('txtbox').value;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        document.writeln(`id: ${json[x-1].id}| name:${json[x-1].name}`)
    })
}