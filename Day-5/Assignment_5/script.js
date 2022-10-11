function addDetails(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {

   method: 'PUT',
        body: JSON.stringify({
            userId: 101,
            name: document.getElementById('name').value,
            userName: document.getElementById('userName').value,
            userEmail: document.getElementById('userMail').value

        }),

        headers:{
            'Content-type':'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}