$(document).ready(function(){
 
$('a').hover(function() {
      $(this).stop().animate({ fontSize : '20px' });
      },
      function() {
      $(this).stop().animate({ fontSize : '16px' });
      });



  setInterval(function(){
    if($('html').width() > 540 )
      $('nav').find('li').animate({top: '+30px'},0);
    else
      $('nav').find('li').animate({top: '+10'},0)
  },1)
})