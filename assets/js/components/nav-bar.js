/**
 * Navigation bar functionality for hamburger menu
 */
$(document).ready(function(){

    /**
     * Hide the navigation bar only on load
     */
    $(".nav-bar").addClass("hidden");

    /**
     * Open hamburger menu
     */
    $(".hamburger-menu").click(function(){
        $("body").addClass("stop-scroll");
        $(".hamburger-menu").addClass("hidden");
        $(".nav-bar").removeClass("hidden");
    });

    /**
     * Close hamburger menu
     */
    $(".close-btn").click(function(){
        $("body").removeClass("stop-scroll");
        $(".hamburger-menu").removeClass("hidden");
        $(".nav-bar").addClass("hidden");
    });
});