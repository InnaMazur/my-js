
window.onload = function(){

    let amountInput = document.getElementById('amount');
    let rateInput = document.getElementById('rate');
    let convertBtn = document.getElementById('convertBtn');
    let resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click',function(){
        let amount = + amountInput.value;
        let rate = +rateInput.value;

        let converted = amount *rate;
        resultDiv.textContent = ` Result : ${converted.toFixed(2)} euro`;
    });


    //2


let taskInput = document.getElementById('Input');
let addBtn = document.getElementById('addBtn');
let List = document.getElementById('List');

addBtn.addEventListener('click', function(){
 
    if(taskInput.value ==='')
        return;
    
   let li = document.createElement('li');
        li.textContent = taskInput.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';

    deleteBtn.addEventListener('click', function(){
        li.remove();
    });

    li.appendChild(deleteBtn);
    List.appendChild(li);

   taskInput.value = '';

});


}