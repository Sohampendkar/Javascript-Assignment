function newData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('urlData').innerHTML = this.responseText;
        }
    };
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true);
    xhr.send(); 
}