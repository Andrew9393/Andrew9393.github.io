$(document).ready(function(){

    		$('#owl_my_carousel1').owlCarousel({  
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })		

    		$('#owl_my_carousel2').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })		



    		$('#owl_my_carousel3').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })	

})