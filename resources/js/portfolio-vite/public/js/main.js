const home = document.getElementById("home-link")
const about_us_link = document.getElementById("about-link")
const services = document.getElementById("services-link")
const products  = document.getElementById("product-link")
const our_work = document.getElementById("service-link")
const contact_us = document.getElementById("contact-link")

$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#ffffff','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            // $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});

function linkClicked(item_clicked){

    const home = document.getElementById("home-link")
    const about_us_link = document.getElementById("about-link")
    const services = document.getElementById("services-link")
    const contact_us = document.getElementById("contact-link")

   


    if(item_clicked == 'home'){
        home.classList.add("link-hover")

        about_us_link.classList.remove("link-hover")
        services.classList.remove("link-hover")
        contact_us.classList.remove("link-hover")
        
    }
    else if(item_clicked == 'about_us'){
        about_us_link.classList.add("link-hover")

        home.classList.remove("link-hover")
        services.classList.remove("link-hover")
        contact_us.classList.remove("link-hover")

    }
    else if(item_clicked == 'services'){
        services.classList.add("link-hover")

        home.classList.remove("link-hover")
        about_us_link.classList.remove("link-hover")
        contact_us.classList.remove("link-hover")

    }

    else if(item_clicked == 'contact_us'){
        contact_us.classList.add("link-hover")

        home.classList.remove("link-hover")
        about_us_link.classList.remove("link-hover")
        services.classList.remove("link-hover")

    }



//     const home = document.getElementById("home-link")
// const about_us_link = document.getElementById("about-link")
// const services = document.getElementById("services-link")
// const products  = document.getElementById("product-link")
// const our_work = document.getElementById("service-link")
// const contact_us = document.getElementById("contact-link")


}