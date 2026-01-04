
window.onload = function(){

    //1

let input = document.getElementById('userInput');
let saveBtn = document.getElementById('saveBtn');
let showBtn = document.getElementById('showBtn');
let result = document.getElementById('result');

saveBtn.addEventListener('click',function(){
    sessionStorage.setItem('userText', input.value);
});

showBtn.addEventListener('click',function(){
    let savedText = sessionStorage.getItem('userText');
    result.textContent = savedText ? savedText : 'Dont have result';
});


//2

let form = document.getElementById('setForm');
let colorInput = document.getElementById('bgColor');

let savedColor =localStorage.getItem('backgroundColor');
if (savedColor){
    document.body.style.backgroundColor = savedColor;
    colorInput.value = savedColor;
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let selectedColor = colorInput.value;
    localStorage.setItem('backgroundColor', selectedColor);
    document.body.style.backgroundColor = selectedColor;
});


//3

let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

function loadTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
     addTaskToDOM(task, index);  
    });

}

function addTaskToDOM(taskText, index){
    li = document.createElement('li');
    li.textContent = taskText;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
 
    deleteBtn.addEventListener('click', ()=>{
        deleteTask(index);
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

addBtn.addEventListener('click', ()=>{
    let task = taskInput.value.trim();
    if(task ==='') return;

let tasks = JSON.parse(localStorage.getItem('tasks')) ||[];
tasks.push(task);
localStorage.setItem('tasks', JSON.stringify(tasks));
loadTasks();
taskInput.value ='';

    });

    function deleteTask(index){
        let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
        tasks.splice(index,1);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        loadTasks();
    }



//4

let myData ={
    name:'Bob',
    age: 25,
    isStudent: true,
    scores: [95,10,44],
    address:{
        city:'Barcelona',
        country:'Spain'
    },
    hobbies: ['dance', 'travel']
};
let jsonData = JSON.stringify(myData,null, 2);
console.log(jsonData);














}