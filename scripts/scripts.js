$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
   
 $(window).scroll(function(){
     if ($(this).scrollTop() > 50) {
     $('header.hero-background').fadeOut(4000);
     $('div.hidden').fadeIn(1000).removeClass('hidden');
     }
 });
 });
 
 