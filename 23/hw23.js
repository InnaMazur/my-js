window.onload = function(){

//1

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>{
    users.forEach(user=>{
        console.log(`Name ${user.name} , email: ${user.email}`);
    });
})
.catch(error=>{console.error(error);

});


//1.2


fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => response.json())
  .then(user => {

    console.log('ID:', user.id);
    console.log('Name:', user.name);
    console.log('Username:', user.username);
    console.log('Email:', user.email);

    console.log('Street:', user.address.street);
    console.log('Suite:', user.address.suite);
    console.log('City:', user.address.city);
    console.log('Zipcode:', user.address.zipcode);

    console.log('Lat:', user.address.geo.lat);
    console.log('Lng:', user.address.geo.lng);

    console.log('Phone:', user.phone);
    console.log('Website:', user.website);

    console.log('Company name:', user.company.name);
    console.log('Catch phrase:', user.company.catchPhrase);
    console.log('BS:', user.company.bs);

  })
  .catch(error => {
    console.error('Error:', error);
  });


//1.3



fetch(`https://jsonplaceholder.typicode.com/users/4`)
  .then(response => response.json())
  .then(user => {
   
    console.log('Name:', user.name);
    console.log('Username:', user.username);
    console.log('Email:', user.email);
  })
    .catch(error => {
        console.error('Error:', error);
      });


//1.4


    fetch(`https://jsonplaceholder.typicode.com/posts?userId=4`)
  
  .then(response => response.json())
  .then(posts => {

    posts.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error =>{ console.error('Error:', error);

  });



  //2


  document.getElementById('btn').addEventListener('click', () => {
    // fetch('https://swapi.dev/api/planets/1/')
    fetch('https://swapi.info/api/planets/1')
      .then(res => res.json())
      .then(data => {
  
        const cardHTML = `
          <div class="card" style="width: 24rem;">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              
              <p class="card-text"><strong>Rotation Period:</strong> ${data.rotation_period}</p>
              <p class="card-text"><strong>Orbital Period:</strong> ${data.orbital_period}</p>
              <p class="card-text"><strong>Diameter:</strong> ${data.diameter}</p>
              <p class="card-text"><strong>Climate:</strong> ${data.climate}</p>
              <p class="card-text"><strong>Gravity:</strong> ${data.gravity}</p>
              <p class="card-text"><strong>Terrain:</strong> ${data.terrain}</p>
              <p class="card-text"><strong>Surface Water:</strong> ${data.surface_water}</p>
              <p class="card-text"><strong>Population:</strong> ${data.population}</p>
              
              ${data.residents.length > 0 ? `<p><strong>Residents:</strong></p> `: ''}
              ${data.residents.map(url => `<a href="${url}" target="_blank">${url}</a>`).join('')}
              
              ${data.films.length > 0 ? `<p class="mt-2"><strong>Films:</strong></p> `: ''}
              ${data.films.map(url => `<a href="${url}" target="_blank">${url}</a>`).join('')}
  
              <p class="mt-2"><strong>Created:</strong> ${data.created}</p>
              <p class="card-text"><strong>Edited:</strong> ${data.edited}</p>
              <p class="card-text"><strong>URL:</strong> <a href="${data.url}" target="_blank">${data.url}</a></p>
            </div>
          </div>
        `;
  
        document.getElementById('planetCard').innerHTML = cardHTML;
      })
      .catch(err => console.error('Error:', err));
  });











}