$(function(){
    /*heder hieght*/
    
   var windowH = $(window).height(),
       navbarH= $('.navbar').innerHeight();
    $('.header_content').height(windowH - navbarH);


})