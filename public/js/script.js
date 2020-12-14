$(document).ready(function() {
    //this function adds a white background to the navbar when scrolled down 100px
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
    

});

