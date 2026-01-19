window.onload = function(){





let xhr = new XMLHttpRequest ();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');

xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status ==200){
    console.log(xhr.response);

let divEl = document.querySelector('div');
    // document.querySelector('div').innerHTML = `Data:<strong>${xhr.response.title}</strong> status:${xhr.response.completed}`;

    xhr.response.forEach(element=>{
        let pEl = document.createElement('p');
        pEl.innerHTML = `UserName:<strong>${element.name}</strong> phone: <strong>${element.phone}</strong>`;
        divEl.appendChild(pEl);
    })

//     email
// : 
// "Sincere@april.biz"
// id
// : 
// 1
// name
// : 
// "Leanne Graham"
// phone
// : 
// "1-770-736-8031 x56442"
// username
// : 
// "Bret"
// website
// : 
// "hildegard.org"
}

}
xhr.responseType = 'json';
xhr.send(null);




















}