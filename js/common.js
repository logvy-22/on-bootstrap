
'use strict'

;(function(){
    
    // burger menu start    
    
    let burger = document.querySelector('.menu-btn'),
        menu = document.querySelector('ul.nav');
    
    
    burger.addEventListener('click', function(){
        menu.classList.toggle('active')
        
    })  
    window.onscroll = function(){
        if (window.pageYOffset> 500 ){
            menu.classList.remove('active') 
            }
        } 

    
    // Tabs
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

    $('.slider').bxSlider({
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 240,
        pager: false,
        infiniteLoop: true,
        touchEnabled: true,
        swipeThreshold: 50,
    

    });
    $('.team-slider').bxSlider({
        mode: 'vertical',
        controls: false
    });

    // open map
    let openMap = document.querySelector('.location span'),
        map = document.querySelector('.map'),
        angleDown = '<i class="fas fa-angle-down"></i>',
        angleUp = '<i class="fas fa-angle-up"></i>',
        clickAmount = 0;

    
    openMap.addEventListener('click', function(){
        clickAmount++;
        mapFunc();
    })
    function mapFunc(){
        if(clickAmount % 2){
            openMap.innerHTML = angleUp;
            map.style.display = 'block';
        }else{
            openMap.innerHTML = angleDown;
            map.style.display = 'none';
        }
    }
    

}());

// scroll to down
function toBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

