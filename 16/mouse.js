
window.onload = function() {

//     let isTunel = false;
//     let firstEl = document.querySelector('#first');
//     let secondEl = document.querySelector('#second');
//     let thirdEl = document.querySelector('#third');

//     firstEl.addEventListener('click', function() {
// this.style.backgroundColor = 'green';
// alert('1 block');
//     }, isTunel);

//     secondEl.addEventListener('click', function(e) {
//         this.style.backgroundColor = 'orange';
//         alert('2 block');
//         e.stopPropagation();
//     }, isTunel);

//     thirdEl.addEventListener('click', function(e) {
//         this.style.backgroundColor = 'yellow';
//         alert('3 block');
    
//     }, isTunel);


let mouseEl = document.querySelector('.mouse');
mouseEl.addEventListener('mousedown', function(e) {

this.innerText = e.type;

});
mouseEl.addEventListener('mouseup', function(e) {

    this.innerText = e.type;
    
    });


    mouseEl.addEventListener('mouseover', function(e) {

        this.innerText = e.type;
        this.style.backgroundColor = 'lightblue';
        
        });
        mouseEl.addEventListener('mouseout', function(e) {

            this.innerText = e.type;
            this.style.backgroundColor = 'green';
            
            });


            // mouseEl.addEventListener('click', function(e) {

            //     this.innerText = e.type;
            //     this.style.backgroundColor = 'orange';
                
            //     });

            mouseEl.addEventListener('dblclick', function(e) {

                this.innerText = e.type;
                this.style.backgroundColor = 'orange';
                
                });

                mouseEl.addEventListener('contextmenu', function(e) {
                   e.preventDefault();
                    this.innerText = e.type;
                    this.style.backgroundColor = 'grey';
                    
                    });

let infoEl = document.querySelector('.info');
 let moveEl = document.querySelector('.move');
 moveEl.addEventListener('mousemove', function(e) {
console.log(e);
infoEl. innerText = ` Type: ${e.type}  X: ${e.clientX}  Y: ${e.clientY}  and  layer${e.layerX}, ${e.layerY} offset ${e.offsetX}, ${e.offsetY}`;

 });


 let inputEl = document.querySelector('input');
 let keyInfo = document.querySelector('.keyinfo');

   inputEl.addEventListener('keydown', function(e) {
     keyInfo.innerText = e.type;
                
      });
      inputEl.addEventListener('keyup', function(e) {
        e.preventDefault();
        keyInfo.innerText = e.type;
        // console.log(e);
                   console.log(`key = ${e.key}, code = ${e.code}`);
if(e.shiftKey) {
    console.log('Shift  true');
}
if(e.altKey) {
    console.log('Alt  true');
}
if(e.ctrlKey) {
    console.log('Ctrl  true');
}

         });













}