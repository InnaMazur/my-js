//1
async function getUserById(userId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(!response.ok)
{
    throw new Error ("Error");
}

const user = await response.json();

console.log("Name", user.name);
console.log("Email", user.email);

} catch (error){
    console.error("Error", error.message);
}
}

getUserById(1);


//2


async function getFilmInfo(){
    try{
        const response = await fetch('https://swapi.info/api/films/1');
        if(!response.ok)
            {
                throw new Error ("Error");
            }
            const data = await response.json();
            console.log('Name of the film',data.title);
            console.log('Data Release', data.release_date);
    }
    catch (error){
        console.log('Error', error.message);
    }
}
getFilmInfo();

//3

async function getPlanetInfo(){
    try{
        const response = await fetch("https://swapi.info/api/planets/2");
        if(!response.ok){
            throw new Error('Error');
        }
        const info = await response.json();
console.log('Name', info.name);
console.log('Climate',info.climate);
    }
    catch (error){
        console.log('Error', error.message);
    }
}
getPlanetInfo();


//4

