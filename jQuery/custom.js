/*global $, alert, console*/

$(function () {
    
    "use strict";
    
    // Trigger The Nice Scroll
    
    $("html").niceScroll({
        
        cursorcolor : "#f7600e",
        cursorwidth : 10,
        cursorborder : "1px solid #f7600e"
        
    });
    
    // Change Height Header 
    
    $(".header").height($(window).height());
    
    $(document).resize(function () {
        
        $(".header").height($(window).height());
        
    });
    
    // Scroll To Features
    
    $(".header .arrow i").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".features").offset().top
            
        }, 1000);
        
    });
    
    // Scroll To Our Team
    
    $(".hire").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".our-team").offset().top
            
        }, 1500);
        
    });
    
    // Scroll To Our Work
    
    $(".work").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".our-work").offset().top
            
        }, 1200);
        
    });
    
    
    // Show Hidden Items Form Work
    
    $(".show-more").click(function () {
        
        $(".our-work .hidden").fadeIn();
        
    });
    
    // Check Testimonials
    
    var leftArrow = $(".testim .container .fa-chevron-left"),
        rightArrow = $(".testim .container .fa-chevron-right");
    
    function checkClients() {
        
        $(".clinet:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
    
        $(".clinet:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    
    checkClients();
    
    $(".testim i").click(function () {
        
        if ($(this).hasClass("fa-chevron-right")) {
            
            $(".testim .active").fadeOut(100, function () {
                
                $(this).removeClass("active").next(".clinet").addClass("active").fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $(".testim .active").fadeOut(100, function () {
                
                $(this).removeClass("active").prev(".clinet").addClass("active").fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });
    
    
    
});