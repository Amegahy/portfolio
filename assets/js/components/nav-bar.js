/**
 * Navigation bar functionality for hamburger menu
 */
$(document).ready(function(){

    /**
     * Hide the navigation bar on mobile only on load
     */
    if ($( window ).width() <= "576"){
        $(".nav-bar").addClass("hidden");
    }
    else {
        $(".nav-bar").removeClass("hidden");
    }

    /**
     * Open hamburger menu
     */
    $(".hamburger-menu").click(function(){
        $(".hamburger-menu").addClass("hidden");
        $(".nav-bar").removeClass("hidden");
    });

    /**
     * Close hamburger menu
     */
    $(".close-btn").click(function(){
        $(".hamburger-menu").removeClass("hidden");
        $(".nav-bar").addClass("hidden");
    });
});