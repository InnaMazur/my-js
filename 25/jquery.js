
// window.onload = function(){
//     let btnEl = document.querySelector('#myBtn');
//     btnEl.addEventListener('click', function(){
//         alert('Hello Jq')
//     });

// }


// let element = document.querySelector('element');
// element.textContent = 'Hello element';
// element.classList.add('btn-danger');
// setTimeout(()=>{
// element.style.display='none';
// }, 2000);




$(document).ready(function(){
    // $('#myBtn').click(function(){
    //     alert('hELLO jQUERY')
    // });

    // $('#myBtn').on('click',function(){
    //     alert('Hello jQuery 2');
    // });


    // $(element).text('New text').addClass('new-btn').delay(2000).hide(0);


    $("#clickme").on ("click",function(){
        $("#book").animate({
            opacity:0.25,
            left:"+=50",
            heigh:"toggle"
        },5000,function(){

        });
    });


  
            $('.your-class').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
          });
      
    



