$(document).ready(function(){
 
$('a').hover(function() {
      $(this).stop().animate({ fontSize : '20px' });
      },
      function() {
      $(this).stop().animate({ fontSize : '16px' });
      });

  $('.outerlightbox').hide();
  
  $('.container img').on('click',function(){
    $('#imagebox').attr('src',$(this).attr('src'));
    $('.outerlightbox').show();
    
  })
  $('.outerlightbox').on('click',function(){
    $('.outerlightbox').hide();
  })

})