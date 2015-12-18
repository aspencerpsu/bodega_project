$(document).ready(function(){
 
$('a').hover(function() {
      $(this).stop().animate({ fontSize : '20px' });
      },
      function() {
      $(this).stop().animate({ fontSize : '16px' });
      });


  $('.outerlightbox').hide();
  $('.container img').on('click',function(e){
  	$('#blankman').attr("src", $(this).attr("src"));
    $('.outerlightbox').show();
  });
  $('.outerlightbox').on('click',function(){
    $('.outerlightbox').hide();
  });




  setInterval(function(){
    if($('html').width() > 540 )
      $('nav').find('li').animate({top: '+30px'},0);
    else
      $('nav').find('li').animate({top: '+10'},0);
  },1)
});
