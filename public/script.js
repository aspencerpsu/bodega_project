$(document).ready(function(){
 
  $('a').hover(function() {
        $(this).stop().animate({ fontSize : '20px' });
        },
        function() {
        $(this).stop().animate({ fontSize : '16px' });
        });
  
})