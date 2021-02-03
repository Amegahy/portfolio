/**
 * Navigation bar functionality for hamburger menu
 */
$(document).ready(function(){

    /**
     * Open hamburger menu
     */
    $(".hamburger-menu").click(function(){
        $(".nav-bar").removeClass("close-nav");
        $(".nav-bar").addClass("open-nav");
        $(".hamburger-menu").addClass("hidden");
    });

    /**
     * Close hamburger menu
     */
    $(".close-btn").click(function(){
        $(".nav-bar").addClass("close-nav");
        $(".nav-bar").removeClass("open-nav");
        $(".hamburger-menu").removeClass("hidden");
    });
});