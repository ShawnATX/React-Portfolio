$(document).ready(function() {
    var navbarCollapse = function() {
        if ($("#navbar").offset().top > 100) {
          $("#navbar").addClass("navbar-show");
        } else {
          $("#navbar").removeClass("navbar-show");
        }
    };
    
    
    //check if currently off top, and if scroll brings to show area
    navbarCollapse();
    $(window).scroll(navbarCollapse);
    
    $('#portfolio-carousel').carousel();
    
    $("#indicator-0").click(function(){
        $("#portfolio-carousel").carousel(0);
      });
    $("#indicator-1").click(function(){
        $("#portfolio-carousel").carousel(1);
      });
});

