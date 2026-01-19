
window.onload = function () {

    let ulEl = document.querySelector('ul');
    console.log(ulEl.children);

    console.log(ulEl.firstElementChild);
    let firstEl = ulEl.firstElementChild;
    firstEl.innerHTML = 'First';
    firstEl.style.background = 'red';

    let lastEl = ulEl.lastElementChild;
    lastEl.innerHTML = 'Last';

    let activeEl = document.querySelector('.active');
    console.log(activeEl);
    console.log(activeEl.nextElementSibling);
    console.log(activeEl.previousElementSibling);

    let nextEl = activeEl.nextElementSibling;
    let prevEl = activeEl.previousElementSibling;
    nextEl.innerHTML = 'next';
    prevEl.innerHTML = 'prev';
    
}