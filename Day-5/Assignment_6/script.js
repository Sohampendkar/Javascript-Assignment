//Getting Error
function deleteData(){
    let x = document.getElementById('userId').value;
    fetch('https://jsonplaceholder.typicode.com/posts/?id='+x.toString(), {
        method: "DELETE"
    }).then((response)=> {
        response.json().then((res)=>{
            console.log(res);
            alert('Deleted: ', res )
        });
    }).catch(err=> console.log(err));
}