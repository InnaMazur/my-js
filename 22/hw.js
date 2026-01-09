window.onload = function(){

//1

function chain(number){
    return Promise.resolve(number)
    .then(value=>{
        return value +5;
    })
    .then(value=>{
        return value *2;
    })
    .then(value=> {
        return value - 10;
    })
    .catch(error=>{
        console.log('Mistake', error);
    })
}
chain (10)
.then(result=>{
    console.log(result);
});
 


//2

function toUpperCase(str){
    return new Promise ((resolve,reject)=>{
        if(typeof str!=='string'){
            reject ('Mistake');
            return;
        }
        setTimeout(()=>{
            resolve(str.toUpperCase());
        },2000);
    });
}

toUpperCase(' Hello world')
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
});


//3
function compareNumber (a,b){

return new Promise((resolve,reject)=>{
    if(a===b){
        reject('The same numbers');
    }
    else{
        let compare = a>b? `${a}  is more than ${b}`: `${b} is mire than ${a}`;
        resolve(compare);
    }
});
}
compareNumber(6,3)
.then(compare=>console.log(compare))
.catch(error=>console.log(error))

}