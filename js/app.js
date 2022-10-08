$(function() {
    
   /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH
    let scrollPos = $(window).scrollTop();
    
    
    $(window).on("scroll load resize", function() {
       introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > introH ) {
            header.addClass("fixed");
         }  else {
             header.removeClass("fixed");
         }
    });
    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(Event) {
        Event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        console.log(elementOffset);
        
        
        $("html, body").animate({
           scrollTop:  elementOffset -89
        }, 700);
    })
    
    
})



$(document).ready(function(){



    
  $('.slideshow__container').slick({
      infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  speed: 1000
    
  });
    
});


document.addEventListener("DOMContentLoaded",function(){

    let slide = document.querySelectorAll('.slide__items');

    slide.forEach(box => 
      box.addEventListener("click", function(event){
        event.preventDefault();
        let id = Number(event.target.getAttribute('id').replace("delo", ""));

        fetch('http://localhost/credit/json/data.json')
        .then(function(res){
          return res.json();
        }).then(function(data){
          for(let i=0; i<data.length; i++){
            if(Number(data[i].id) == id){
              document.querySelector('.count').innerHTML = data[i].count
              document.querySelector('.determined').innerHTML = data[i].determined
              document.querySelector('.number').innerHTML = data[i].number
              document.querySelector('.duration').innerHTML = data[i].duration
              document.querySelector('.credits_list').innerHTML = data[i].credits_list
            }
          }
        })
        window.scrollTo({
            top: 2300,
            behavior: "smooth"
        });
      })
    )


})


 


































