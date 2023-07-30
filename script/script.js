const nav_open = document.querySelectorAll('.nav_open');
const category = document.querySelectorAll('.category');
nav_open[0].style.display = 'none';
nav_open[1].style.display = 'none';
nav_open[2].style.display = 'none';
nav_open[3].style.display = 'none';
nav_open[4].style.display = 'none';
nav_open[5].style.display = 'none';
category[0].addEventListener('mouseover',function(){
    nav_open[0].style.display = 'flex';
})
category[0].addEventListener('mouseout',function(){
    nav_open[0].style.display = 'none';
})
category[1].addEventListener('mouseover',function(){
    nav_open[1].style.display = 'flex';
})
category[1].addEventListener('mouseout',function(){
    nav_open[1].style.display = 'none';
})
category[2].addEventListener('mouseover',function(){
    nav_open[2].style.display = 'flex';
})
category[2].addEventListener('mouseout',function(){
    nav_open[2].style.display = 'none';
})
category[3].addEventListener('mouseover',function(){
    nav_open[3].style.display = 'flex';
})
category[3].addEventListener('mouseout',function(){
    nav_open[3].style.display = 'none';
})
category[4].addEventListener('mouseover',function(){
    nav_open[4].style.display = 'flex';
})
category[4].addEventListener('mouseout',function(){
    nav_open[4].style.display = 'none';
})
category[5].addEventListener('mouseover',function(){
    nav_open[5].style.display = 'flex';
})
category[5].addEventListener('mouseout',function(){
    nav_open[5].style.display = 'none';
})

const movie_slide = new Swiper('#movie_slide',{
    autoplay:{
        delay:3000, 
        disableOnInteraction:false
    }, 
    loop:true, 
    direction:'vertical',
    navigation: { 
        nextEl: '#movie_slide .swiper-button-next',
        prevEl: '#movie_slide .swiper-button-prev',
    }
});