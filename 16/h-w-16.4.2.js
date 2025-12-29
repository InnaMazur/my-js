window.onload = function() {

 
    let menu = document.querySelector('.all');
    let items = document.querySelectorAll('.all li');
  
    let active = 0;
    menu.style.display = 'none';
    function highlightItem(){
        items.forEach(li=> li.classList.remove('active'));
        items[active].classList.add('active');
    }
    
    document.addEventListener('keydown', function(e) {
    if(e.key === 'm'|| e.key=== 'M') {
        menu.style.display = 'block';
        highlightItem();
    };
    
    if(e.key === 's'||e.key === 'S') {
        
        menu.style.display = 'none';
    }
    
    if(menu.style.display!== 'block')return;
    
    if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){ 
         e.preventDefault();
        }
        if(e.key === 'ArrowDown') {
        active++;
        if(active>items.length - 1) active = 0;
    highlightItem();
        
        }
      
        if(e.key === 'ArrowUp') {
          
        active--;
        if(active<0) 
            active = items.length - 1;
        
       highlightItem();
    }
        
        
    });













}