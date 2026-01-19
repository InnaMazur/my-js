window.onload = function(){

// let promissFetch = fetch('url', [options])

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      

//response.text()
//respons.formData()
//response.blob()


fetch('https://jsonplaceholder.typicode.com/posts',{
method:'POST',
body:JSON.stringify({
    body : 
    "quia et suscipe ut ut quas totam\nnest autem sunt rem eveniet architecto",
    id : 1,
    title : "sunt aut facere repellat optio reprehenderit",
    userId: 1
}),
headers:{
    'Content-type': 'application/json; charset=UTF-8'
}

}).then(response=>response.json())
  .then(data=>{console.log(data)});


  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    body:JSON.stringify({
        body : 
        "quia et suscipe ut ut quas totam\nnest autem sunt rem eveniet architecto",
        id : 1,
        title : "sunt aut facere repellat optio reprehenderit",
        userId: 1
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
    
    }).then(response=>response.json())
      .then(data=>{console.log(data)});

      fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'DELETE',
        
        }).then(response=>response.json())
          .then(data=>{console.log(data)});



          fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'GET',
            headers:{
                'Content-type': 'application/json; charset=UTF=8',
                'Autorization': 'Bearer your_token_here',
                'Cookie': 'sessionId = your_session_id',
            }
            
            }).then(response=>response.json())
              .then(data=>{console.log(data)})
            .catch(error=>console.log(error));













}