function getDetails(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            userId: document.getElementById('userId').value,
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